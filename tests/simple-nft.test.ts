import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const w1 = accounts.get("wallet_1")!;
const w2 = accounts.get("wallet_2")!;

describe("simple-nft", () => {
  it("mints token #1 to wallet_1 with a URI", () => {
    const uri = Cl.stringUtf8("https://example.com/metadata/1.json");
    const res = simnet.callPublicFn("simple-nft", "mint", [Cl.principal(w1), uri], w1);
    expect(res.result).toBeOk(Cl.bool(true));

    // owner should be wallet_1
    const owner = simnet.callReadOnlyFn("simple-nft", "get-owner", [Cl.uint(1)], w1);
    expect(owner.result).toBeSome(Cl.principal(w1));

    // uri should be stored
    const meta = simnet.callReadOnlyFn("simple-nft", "get-token-uri", [Cl.uint(1)], w1);
    // meta returns (some { uri: "..." }) from map-get?
    expect(meta.result).toBeSome(Cl.tuple({
      uri: Cl.stringUtf8("https://example.com/metadata/1.json")
    }));
  });

  it("transfers token #1 from wallet_1 to wallet_2", () => {
    // First mint a token to wallet_1
    const uri = Cl.stringUtf8("https://example.com/metadata/1.json");
    const mintRes = simnet.callPublicFn("simple-nft", "mint", [Cl.principal(w1), uri], w1);
    expect(mintRes.result).toBeOk(Cl.bool(true));

    // wallet_1 transfers to wallet_2
    const tx = simnet.callPublicFn("simple-nft", "transfer", [Cl.uint(1), Cl.principal(w2)], w1);
    expect(tx.result).toBeOk(Cl.bool(true));

    // new owner should be wallet_2
    const owner = simnet.callReadOnlyFn("simple-nft", "get-owner", [Cl.uint(1)], w1);
    expect(owner.result).toBeSome(Cl.principal(w2));
  });

  it("prevents non-owner transfer", () => {
    // First mint a token to wallet_1
    const uri = Cl.stringUtf8("https://example.com/metadata/1.json");
    const mintRes = simnet.callPublicFn("simple-nft", "mint", [Cl.principal(w1), uri], w1);
    expect(mintRes.result).toBeOk(Cl.bool(true));

    // wallet_2 (not owner) tries to transfer -> should fail with u403
    const bad = simnet.callPublicFn("simple-nft", "transfer", [Cl.uint(1), Cl.principal(w1)], w2);
    expect(bad.result).toBeErr(Cl.uint(403));
  });
});

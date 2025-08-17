;; Simple Non-Fungible Token (NFT)
;; - Unique uint token IDs
;; - One owner per token
;; - Mint, transfer, read owner & metadata (token URI)

(define-non-fungible-token simple-nft uint)

;; auto-incrementing token id
(define-data-var last-id uint u0)

;; optional metadata: token -> uri
(define-map token-uri
  { id: uint }
  { uri: (string-utf8 200) }
)

;; Read owner of a token: returns (some principal) or none
(define-read-only (get-owner (id uint))
  (nft-get-owner? simple-nft id)
)

;; Read token URI (metadata)
(define-read-only (get-token-uri (id uint))
  (map-get? token-uri { id: id })
)

;; Mint next token to `to` with a `uri` (e.g., https://.../metadata.json)
(define-public (mint (to principal) (uri (string-utf8 200)))
  (let
    (
      (new-id (+ (var-get last-id) u1))
    )
    (begin
      (var-set last-id new-id)
      (map-set token-uri { id: new-id } { uri: uri })
      (nft-mint? simple-nft new-id to)   ;; (ok true) on success
    )
  )
)

;; Transfer `id` from caller to `to`
(define-public (transfer (id uint) (to principal))
  (let ((owner (nft-get-owner? simple-nft id)))
    (begin
      (asserts! (is-some owner) (err u404))
      (asserts! (is-eq (unwrap-panic owner) tx-sender) (err u403))
      (nft-transfer? simple-nft id tx-sender to)
    )
  )
)

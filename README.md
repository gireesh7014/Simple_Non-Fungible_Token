# Simple Non-Fungible Token (NFT) On-Chain

## 📜 Project Description
This project is a decentralized, on-chain implementation of a Non-Fungible Token (NFT) system, built using the Clarity smart contract language and deployed on the Stacks Testnet. The smart contract enables users to mint, transfer, and manage unique digital tokens with metadata support in a fully trustless and transparent environment, where every mint, transfer, and ownership change is verifiable on the blockchain.

The contract handles token creation, ownership tracking, metadata management, and secure transfers — all without any centralized server or intermediary.

## 🔭 Project Vision
The vision behind this project is to demonstrate the capabilities of decentralized digital asset management on the Stacks blockchain. By building an NFT system with auto-incrementing IDs and metadata support, we aim to:

- Showcase the potential of Clarity smart contracts for digital asset creation and management.
- Encourage developers and creators to explore on-chain NFT mechanics and tokenization.
- Establish a foundation for more advanced and feature-rich blockchain-based digital collectibles.
- Provide a simple yet robust foundation for NFT projects on the Stacks ecosystem.

## ⭐ Key Features
✅ **Mint New NFTs**: Users can create new unique tokens with custom metadata URIs and assign them to any address.  
🔄 **Transfer Ownership**: Token owners can securely transfer their NFTs to other addresses with built-in validation.  
🎮 **Track Ownership**: Easy querying of token ownership with read-only functions for transparency.  
🧠 **Metadata Support**: Each token can have an associated URI (up to 200 characters) for linking to external metadata.  
🏆 **Auto-incrementing IDs**: Automatic sequential ID assignment ensures each token is unique and easily identifiable.  
💰 **Access Control**: Only the current token owner can transfer their tokens, ensuring security.  
🔐 **On-chain Logic**: Entire NFT logic (ownership, metadata, and transfers) is stored and computed on-chain.

## 🚀 Future Scope
🧩 **NFT Marketplace Integration**: Build a front-end interface (e.g., React + Stacks.js) for users to mint, buy, and sell NFTs easily.  
💬 **Enhanced Metadata**: Add support for richer metadata standards and IPFS integration for decentralized storage.  
🪙 **Royalty System**: Implement creator royalties on secondary sales using advanced Clarity features.  
👾 **Collection Features**: Introduce collection grouping, rarity traits, and batch minting capabilities.  
🧪 **Advanced Testing**: Add comprehensive test coverage and security audits for production readiness.  
🌍 **Cross-chain Bridging**: Enable NFT bridging to other blockchains for broader ecosystem compatibility.

## 📋 Contract Details
**Deployed Contract Address**: `ST1JAHE8GEHB0MCBGR8J6W0AA7TJEE1XKFSD2Q80H.my-unique-nft`  
**Network**: Stacks Testnet  
**Token Standard**: Custom NFT implementation with uint identifiers  
**Token Name**: `simple-nft-v2`

### 🔧 Contract Functions

#### Read-Only Functions
- `(get-owner (id uint))` - Returns the owner of a specific token ID
- `(get-token-uri (id uint))` - Returns the metadata URI for a specific token ID

#### Public Functions
- `(mint (to principal) (uri (string-utf8 200)))` - Mints a new NFT to the specified address with metadata URI
- `(transfer (id uint) (to principal))` - Transfers ownership of a token from the caller to another address

## 🛠️ Tech Stack Used

- **Blockchain**: Stacks Blockchain
- **Smart Contract Language**: Clarity
- **Development Framework**: Clarinet
- **Testing**: Clarinet Test Suite & Vitest
- **Package Manager**: npm
- **Version Control**: Git
- **Development Tools**: Node.js, TypeScript

## 🚀 Setup Instructions

### Prerequisites
- [Clarinet](https://github.com/hirosystems/clarinet) - Clarity development environment
- [Stacks CLI](https://docs.stacks.co/docs/cli) - For blockchain interactions
- Node.js (v16 or later)
- Git

### Installation Steps

1. **Clone the repository:**
```bash
git clone https://github.com/gireesh7014/Simple_Non-Fungible_Token.git
cd Simple_Non-Fungible_Token
```

2. **Install Clarinet (if not already installed):**
```bash
npm install -g @hirosystems/clarinet
```

3. **Install project dependencies:**
```bash
npm install
```

4. **Verify installation:**
```bash
clarinet check
```

5. **Run tests:**
```bash
npm test
# or
clarinet test
```

## 🎯 How to Use the Project

### 1. Testing Locally
```bash
# Check contract syntax
clarinet check

# Run all tests
npm test

# Run specific test file
npx vitest tests/simple-nft.test.ts
```

### 2. Deploying to Testnet
```bash
# Generate deployment plan
clarinet deployments generate --testnet --low-cost

# Deploy to testnet
clarinet deployments apply --testnet
```

### 3. Interacting with the Contract

#### Minting an NFT
```clarity
;; Mint a new NFT to an address with metadata
(contract-call? .my-unique-nft mint 'ST1JAHE8GEHB0MCBGR8J6W0AA7TJEE1XKFSD2Q80H "https://example.com/metadata/1.json")
```

#### Transferring an NFT
```clarity
;; Transfer token ID 1 to another address
(contract-call? .my-unique-nft transfer u1 'ST2JAHE8GEHB0MCBGR8J6W0AA7TJEE1XKFSD2Q80H)
```

#### Reading Token Information
```clarity
;; Get owner of token ID 1
(contract-call? .my-unique-nft get-owner u1)

;; Get metadata URI of token ID 1
(contract-call? .my-unique-nft get-token-uri u1)
```

## 📁 Project Structure

```
Simple_Non-Fungible_Token/
├── contracts/              # Clarity smart contracts
│   └── my-unique-nft.clar # Main NFT contract
├── deployments/           # Deployment configurations
├── settings/              # Network configurations
├── tests/                 # Test files
├── package.json          # Project dependencies
├── Clarinet.toml         # Clarinet configuration
└── README.md             # This file
```

## Security

- Never commit private keys or mnemonic phrases
- Use testnet for development and testing
- Audit smart contracts before mainnet deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [@gireesh7014](https://github.com/gireesh7014)
- Project Link: https://github.com/gireesh7014/Simple_Non-Fungible_Token

## Acknowledgments

- Stacks Foundation for the blockchain platform
- Clarity documentation and community
<img width="1911" height="889" alt="Screenshot 2025-08-17 155113" src="https://github.com/user-attachments/assets/30c8ee4a-dc13-4ea2-ab2f-7d6c95f688f5" />

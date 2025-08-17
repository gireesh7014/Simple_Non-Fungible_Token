# Simple Non-Fungible Token (NFT)

A comprehensive NFT implementation built on the Stacks blockchain using Clarity smart contracts. This project demonstrates minting, transferring, and managing unique digital tokens with metadata support and auto-incrementing IDs.

## Tech Stack Used

- **Blockchain**: Stacks Blockchain
- **Smart Contract Language**: Clarity
- **Development Framework**: Clarinet
- **Testing**: Clarinet Test Suite
- **Package Manager**: npm
- **Version Control**: Git
- **Deployment**: Testnet/Mainnet compatible
- **Development Tools**: 
  - Node.js
  - TypeScript
  - Vitest (for testing)

## Setup Instructions

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

### Configuration for Deployment

1. Copy the testnet configuration template
2. Add your mnemonic phrase to `settings/Testnet.toml`
3. Ensure sensitive files are not committed to version control

## Smart Contract Address (Deployed on Testnet)

**Contract Name**: `my-unique-nft`  
**Network**: Stacks Testnet  
**Contract Address**: `ST1JAHE8GEHB0MCBGR8J6W0AA7TJEE1XKFSD2Q80H.my-unique-nft`  

### Contract Functions Available

#### Read-Only Functions
- `(get-owner (id uint))` - Returns the owner of a specific token ID
- `(get-token-uri (id uint))` - Returns the metadata URI for a specific token ID

#### Public Functions
- `(mint (to principal) (uri (string-utf8 200)))` - Mints a new NFT to the specified address with metadata URI
- `(transfer (id uint) (to principal))` - Transfers ownership of a token from the caller to another address

## How to Use the Project

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

### 4. Using Stacks CLI
```bash
# Check contract status
stx call_read_only_function ST1JAHE8GEHB0MCBGR8J6W0AA7TJEE1XKFSD2Q80H my-unique-nft get-owner --testnet

# Call contract function
stx call_contract_func ST1JAHE8GEHB0MCBGR8J6W0AA7TJEE1XKFSD2Q80H my-unique-nft mint --testnet
```

### Project Features

- ✅ **Auto-incrementing Token IDs**: Each new token gets a unique, sequential ID
- ✅ **Metadata Support**: Associate URIs with tokens (up to 200 characters)
- ✅ **Ownership Tracking**: Track current owner of each token
- ✅ **Transfer Functionality**: Secure token transfers between addresses
- ✅ **Access Control**: Only token owners can transfer their tokens
- ✅ **Testnet Ready**: Deployed and tested on Stacks testnet

## Project Structure

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

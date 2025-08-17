# Simple Non-Fungible Token (NFT)

A simple NFT implementation built on the Stacks blockchain using Clarity smart contracts.

## Overview

This project demonstrates the creation and management of Non-Fungible Tokens (NFTs) on the Stacks blockchain. It includes smart contracts written in Clarity and configuration for testnet deployment.

## Features

- NFT minting functionality
- Token ownership tracking
- Transfer capabilities
- Metadata management
- Testnet deployment ready

## Prerequisites

- [Clarinet](https://github.com/hirosystems/clarinet) - Clarity development environment
- [Stacks CLI](https://docs.stacks.co/docs/cli) - For blockchain interactions
- Node.js (if using additional tooling)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/gireesh7014/Simple_Non-Fungible_Token.git
cd Simple_Non-Fungible_Token
```

2. Install Clarinet (if not already installed):
```bash
npm install -g @hirosystems/clarinet
```

## Configuration

The project includes testnet configuration in `settings/Testnet.toml`. For security reasons, you'll need to:

1. Copy the example configuration
2. Add your own mnemonic phrase
3. Ensure the configuration file is not committed to version control

## Usage

### Testing

Run tests using Clarinet:
```bash
clarinet test
```

### Deployment

Deploy to testnet:
```bash
clarinet deploy --testnet
```

## Project Structure

```
Simple_Non-Fungible_Token/
├── contracts/          # Clarity smart contracts
├── settings/           # Network configurations
├── tests/             # Test files
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Smart Contract Features

- **Minting**: Create new NFTs with unique identifiers
- **Transfer**: Transfer ownership between addresses
- **Metadata**: Associate metadata with tokens
- **Ownership**: Track current owner of each token

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

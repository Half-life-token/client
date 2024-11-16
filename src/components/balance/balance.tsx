import { BaseError, formatUnits } from 'viem';
import React from 'react';
import { useAccount, useContractRead, useReadContract } from 'wagmi';
import { halfconfig } from '../../halfconfig';
import { abi } from './abi.json'
export default function Balance() {
    const { address, isConnected } = useAccount();
    const {
        data: balance,
        error,
        isPending
    } = useReadContract({
        abi:  [
            {
                "type": "constructor",
                "inputs": [
                    {
                        "name": "_usdc",
                        "type": "address",
                        "internalType": "address"
                    }
                ],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "acceptOwnership",
                "inputs": [],
                "outputs": [],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "allowance",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "spender",
                        "type": "address",
                        "internalType": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "approve",
                "inputs": [
                    {
                        "name": "spender",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "balanceOf",
                "inputs": [
                    {
                        "name": "account",
                        "type": "address",
                        "internalType": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "buy",
                "inputs": [
                    {
                        "name": "_tokensToBuy",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "outputs": [],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "callbackGasLimit",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "cashOut",
                "inputs": [],
                "outputs": [],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "decimals",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8",
                        "internalType": "uint8"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "half",
                "inputs": [],
                "outputs": [],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "keyHash",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "lastRequestId",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "name",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "string",
                        "internalType": "string"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "numWords",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "owner",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "address",
                        "internalType": "address"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "rawFulfillRandomWords",
                "inputs": [
                    {
                        "name": "requestId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "randomWords",
                        "type": "uint256[]",
                        "internalType": "uint256[]"
                    }
                ],
                "outputs": [],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "requestConfirmations",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16",
                        "internalType": "uint16"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "requestIds",
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "requestRandomWordsForServer",
                "inputs": [],
                "outputs": [],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "s_requests",
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "fulfilled",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "exists",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "s_subscriptionId",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "s_vrfCoordinator",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "address",
                        "internalType": "contract IVRFCoordinatorV2Plus"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "setCoordinator",
                "inputs": [
                    {
                        "name": "_vrfCoordinator",
                        "type": "address",
                        "internalType": "address"
                    }
                ],
                "outputs": [],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "setPoolAddress",
                "inputs": [
                    {
                        "name": "_uniswapPool",
                        "type": "address",
                        "internalType": "address"
                    }
                ],
                "outputs": [],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "symbol",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "string",
                        "internalType": "string"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "totalSupply",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "stateMutability": "view"
            },
            {
                "type": "function",
                "name": "transfer",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "transferFrom",
                "inputs": [
                    {
                        "name": "from",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "to",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ],
                "stateMutability": "nonpayable"
            },
            {
                "type": "function",
                "name": "transferOwnership",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address",
                        "internalType": "address"
                    }
                ],
                "outputs": [],
                "stateMutability": "nonpayable"
            },
            {
                "type": "event",
                "name": "Approval",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address",
                        "indexed": true,
                        "internalType": "address"
                    },
                    {
                        "name": "spender",
                        "type": "address",
                        "indexed": true,
                        "internalType": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint256",
                        "indexed": false,
                        "internalType": "uint256"
                    }
                ],
                "anonymous": false
            },
            {
                "type": "event",
                "name": "BuyPeriodEnded",
                "inputs": [],
                "anonymous": false
            },
            {
                "type": "event",
                "name": "CoordinatorSet",
                "inputs": [
                    {
                        "name": "vrfCoordinator",
                        "type": "address",
                        "indexed": false,
                        "internalType": "address"
                    }
                ],
                "anonymous": false
            },
            {
                "type": "event",
                "name": "GameEnd",
                "inputs": [],
                "anonymous": false
            },
            {
                "type": "event",
                "name": "OwnershipTransferRequested",
                "inputs": [
                    {
                        "name": "from",
                        "type": "address",
                        "indexed": true,
                        "internalType": "address"
                    },
                    {
                        "name": "to",
                        "type": "address",
                        "indexed": true,
                        "internalType": "address"
                    }
                ],
                "anonymous": false
            },
            {
                "type": "event",
                "name": "OwnershipTransferred",
                "inputs": [
                    {
                        "name": "from",
                        "type": "address",
                        "indexed": true,
                        "internalType": "address"
                    },
                    {
                        "name": "to",
                        "type": "address",
                        "indexed": true,
                        "internalType": "address"
                    }
                ],
                "anonymous": false
            },
            {
                "type": "event",
                "name": "RandomessFullfilled",
                "inputs": [],
                "anonymous": false
            },
            {
                "type": "event",
                "name": "RemoveUniswapLiquidity",
                "inputs": [],
                "anonymous": false
            },
            {
                "type": "event",
                "name": "RequestSent",
                "inputs": [
                    {
                        "name": "requestId",
                        "type": "uint256",
                        "indexed": false,
                        "internalType": "uint256"
                    },
                    {
                        "name": "sender",
                        "type": "address",
                        "indexed": false,
                        "internalType": "address"
                    }
                ],
                "anonymous": false
            },
            {
                "type": "event",
                "name": "RoundEnded",
                "inputs": [],
                "anonymous": false
            },
            {
                "type": "event",
                "name": "Transfer",
                "inputs": [
                    {
                        "name": "from",
                        "type": "address",
                        "indexed": true,
                        "internalType": "address"
                    },
                    {
                        "name": "to",
                        "type": "address",
                        "indexed": true,
                        "internalType": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint256",
                        "indexed": false,
                        "internalType": "uint256"
                    }
                ],
                "anonymous": false
            },
            {
                "type": "error",
                "name": "ERC20InsufficientAllowance",
                "inputs": [
                    {
                        "name": "spender",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "allowance",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "needed",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "type": "error",
                "name": "ERC20InsufficientBalance",
                "inputs": [
                    {
                        "name": "sender",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "balance",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "needed",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "type": "error",
                "name": "ERC20InvalidApprover",
                "inputs": [
                    {
                        "name": "approver",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            },
            {
                "type": "error",
                "name": "ERC20InvalidReceiver",
                "inputs": [
                    {
                        "name": "receiver",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            },
            {
                "type": "error",
                "name": "ERC20InvalidSender",
                "inputs": [
                    {
                        "name": "sender",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            },
            {
                "type": "error",
                "name": "ERC20InvalidSpender",
                "inputs": [
                    {
                        "name": "spender",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            },
            {
                "type": "error",
                "name": "GAME_IS_NOT_OVER",
                "inputs": []
            },
            {
                "type": "error",
                "name": "GAME_STARTED",
                "inputs": []
            },
            {
                "type": "error",
                "name": "NOT_ENOUGH_ALLOWANCE",
                "inputs": []
            },
            {
                "type": "error",
                "name": "NOT_WINNER",
                "inputs": []
            },
            {
                "type": "error",
                "name": "ONLY_OWNER",
                "inputs": []
            },
            {
                "type": "error",
                "name": "OVER_MAX_TOKEN_POOL_SIZE",
                "inputs": []
            },
            {
                "type": "error",
                "name": "OnlyCoordinatorCanFulfill",
                "inputs": [
                    {
                        "name": "have",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "want",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            },
            {
                "type": "error",
                "name": "OnlyOwnerOrCoordinator",
                "inputs": [
                    {
                        "name": "have",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "coordinator",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            },
            {
                "type": "error",
                "name": "RANDOMNESS_NOT_SENT",
                "inputs": []
            },
            {
                "type": "error",
                "name": "TRANSFER_FAILED",
                "inputs": []
            },
            {
                "type": "error",
                "name": "USERS_CANNOT_PROVIDE_LIQUIDTY",
                "inputs": []
            },
            {
                "type": "error",
                "name": "ZeroAddress",
                "inputs": []
            }
        ],
        address: '0xa17471dea98083f5d3f36b04730c380f417d9cfd',
        functionName: 'balanceOf',
        args: address ? [address] : undefined, // Provide the user's address
        query: {
            enabled: isConnected,
        }
      })
    if (isPending) return <div>Loading...</div>
    if (error)
        return (
            <div>
                Error: {(error as BaseError).shortMessage || error.message}
            </div>
        )

    return (
        <div>Balance: {balance?.toString()}</div>
    )
}
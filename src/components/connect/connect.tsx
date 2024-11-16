import { ConnectButton } from "@rainbow-me/rainbowkit";
import Nuclear from "../../assets/radioactive.jpg";
import RadioactiveButton from "../../assets/radioactive-button.png";

export const Connect = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus || authenticationStatus === "authenticated");

                return (
                    <div
                        {...(!ready && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none",
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button
                                        onClick={openConnectModal}
                                        type="button"
                                        style={{
                                            backgroundColor: "yellow",
                                            display: "flex",
                                            alignItems: "center",
                                            color: "black",
                                            border: "none",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <img
                                            src={Nuclear}
                                            alt="Wallet Icon"
                                            style={{ width: 62, height: 62 }}
                                        />
                                        <div className="relative">
                                            <img
                                                src={RadioactiveButton}
                                                alt="Wallet Icon"
                                                style={{ height: 62 }}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center text-2xl font-nixie text-black-800 font-black nixie-number">
                                                connect wallet
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center rounded-lg nixie-glow bg-orange-400 opacity-40 blur-md"></div>
                                        </div>

                                    </button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <button onClick={openChainModal} type="button">
                                        Wrong network
                                    </button>
                                );
                            }

                            return (
                                <div style={{ display: "flex", gap: 12 }}>
                                    <button
                                        onClick={openChainModal}
                                        style={{ display: "flex", alignItems: "center" }}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: "hidden",
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? "Chain icon"}
                                                        src={chain.iconUrl}
                                                        style={{ width: 12, height: 12 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </button>
                                    <button onClick={openAccountModal} type="button">
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ""}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

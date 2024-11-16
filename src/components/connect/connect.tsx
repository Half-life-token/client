import { ConnectButton } from "@rainbow-me/rainbowkit";
import Nuclear from "../../assets/radioactive.jpg";
import RadioactiveButton from "../../assets/radioactive-button.png";
import { ReactElement, JSXElementConstructor, ReactNode } from "react";

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
              // Common button styles
              const buttonStyle = {
                backgroundColor: "yellow",
                display: "flex",
                alignItems: "center",
                color: "black",
                border: "none",
                cursor: "pointer",
              };

              const renderButtonContent = (text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined) => (
                <>
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
                      {text}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg nixie-glow bg-orange-400 opacity-40 blur-md"></div>
                  </div>
                </>
              );

              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    style={buttonStyle}
                  >
                    {renderButtonContent("connect wallet")}
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    style={buttonStyle}
                  >
                    {renderButtonContent("wrong network")}
                  </button>
                );
              }

              return (
                <button
                  onClick={openAccountModal}
                  type="button"
                  style={buttonStyle}
                >
                  {renderButtonContent(
                    `${account.displayName}${
                      account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""
                    }`
                  )}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

import React from "react"
import { GridLoader } from "react-spinners"
import { LoadingLayoutProps } from "./LoadingLayoutTypes"
import { CenteredDiv } from "./LoadingLayoutStyles"

const LoadingLayout: React.FC<LoadingLayoutProps> = ({
    isLoading,
    size = 15,
    children
}): JSX.Element => {
    return (
        <>
            {isLoading ? (
                <CenteredDiv className="loading-layout">
                    <GridLoader size={size} color="#081b31" />
                </CenteredDiv>
            ) : (
                children
            )}
        </>
    )
}

export default LoadingLayout
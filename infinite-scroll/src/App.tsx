import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { AiOutlineLoading } from "react-icons/ai";

const ListContainer = styled.ul`
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;

    & > li {
        list-style: none;
    }
`;

const DuckItem = styled.li`
    width: 100%;
    height: 300px;
    padding: 1rem 0;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const LoadingStyled = styled.li`
    width: 100%;
    font-size: 3rem;
    text-align: center;

    @keyframes spin {
        to {
            transform: rotate(0deg);
        }

        from {
            transform: rotate(360deg);
        }
    }

    & > svg {
        animation: spin 1.5s infinite;
    }
`;

function App() {
    const [gif, setGif] = useState({
        list: [1],
        max: 0,
    });

    const pageEnd = useRef(null);

    const fetchList = async () => {
        const { data } = await axios.get("/api/v2/list");

        setGif((gif) => ({ ...gif, max: data.image_count }));
    };

    useEffect(() => {
        if (gif.max === 0) {
            fetchList();
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setGif((gif) => ({
                        ...gif,
                        list: gif.list.concat(gif.list.length + 1),
                    }));
                }
            },
            { threshold: 1 },
        );

        if (pageEnd.current) {
            observer.observe(pageEnd.current);
        }
    }, [gif]);

    return (
        <ListContainer>
            {gif.list.map((image) => (
                <DuckItem key={image}>
                    <img
                        src={`https://random-d.uk/api/v2/${image}.jpg`}
                        alt={`duck${image}`}
                    />
                </DuckItem>
            ))}
            <LoadingStyled ref={pageEnd}>
                {gif.max !== gif.list.length ? <AiOutlineLoading /> : null}
            </LoadingStyled>
        </ListContainer>
    );
}

export default App;

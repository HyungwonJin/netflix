import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 0px 10px;
`;

const TVPresenter = ({
    topRated,
    popular,
    airingToday,
    error,
    loading
}) => loading ? <Loader /> : (
        <Container>
            {topRated && topRated.length > 0 && 
                (<Section title="Top Rated Shows">
                    {topRated.map(show => <Poster 
                            key={show.id}
                            id={show.id}
                            title={show.original_name} 
                            imageUrl={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0,4)}
                        />)}
                </Section>
            )}
            {popular && popular.length > 0 && 
                (<Section title="Popular Shows">
                    {popular.map(show => <Poster 
                            key={show.id}
                            id={show.id}
                            title={show.original_name} 
                            imageUrl={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0,4)}
                        />)}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && 
                (<Section title="airing Today Shows">
                    {airingToday.map(show => (
                        <Poster 
                            key={show.id}
                            id={show.id}
                            title={show.original_name} 
                            imageUrl={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0,4)}
                        />
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
        </Container>);


// eslint-disable-next-line react/no-typos
TVPresenter.PropTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.string
}

export default TVPresenter;
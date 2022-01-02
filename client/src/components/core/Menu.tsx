import React, { useEffect } from 'react'
import { listGenres } from 'actions'
import { Loader, Message } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'store'
import { ReduxState } from 'types/ReduxState'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { error, loading, genres } = useSelector(
        (state: ReduxState) => state.genreList
    )

    useEffect(() => {
        if (genres.length === 0) dispatch(listGenres())
        console.log(genres)
    }, [dispatch, genres])

    const genresDisplay = () => {
        if (loading) return <Loader />;
        else if (error) return <Message variant='danger'>{error}</Message>;
        else
            return (
                <NavDropdown title="Genres" id="collasible-nav-dropdown">
                    {genres.map((genre) => (
                        <Link to={`/genres/${genre._id}`}>
                            <NavDropdown.Item href="/genre">{genre.name}</NavDropdown.Item>
                        </Link>
                    ))}
                </NavDropdown>
            )
    }

    return (
        <>
            <Navbar collapseOnSelect bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {genresDisplay()}
                            <NavDropdown title="Sort" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/genre">Latest</NavDropdown.Item>
                                <NavDropdown.Item href="/genre">Views</NavDropdown.Item>
                                <NavDropdown.Item href="/genre">A to Z</NavDropdown.Item>
                                <NavDropdown.Item href="/genre">Rating</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/about">For Male</Nav.Link>
                            <Nav.Link href="/contact">For Female</Nav.Link>
                            <Nav.Link href="/contact">Search Adv</Nav.Link>
                            <Nav.Link href="/contact">Group</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu
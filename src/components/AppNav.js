'use client'
import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";

const AppNav = () => {
    return (
        <>
          <div>
              <Navbar bg="dark" data-bs-theme="dark">
                  <Container>
                      <Navbar.Brand href="/">Navbar</Navbar.Brand>
                      <Nav className="me-auto">
                          <Link className="nav-link" href="/">Home</Link>
                          <Link className="nav-link" href="/create">Create</Link>
                      </Nav>
                  </Container>
              </Navbar>
          </div>
        </>
    );
};

export default AppNav;
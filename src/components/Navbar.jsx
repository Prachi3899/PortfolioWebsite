import React,{ useState } from 'react';
import styled, {useTheme} from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import {Bio} from '../data/constants';
import { MenuRounded } from '@mui/icons-material';

const Nav = styled.div`
    background-color: ${({ theme }) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    color: white;
`;

const NavbarContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
`;

const Navlogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 18px;
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
    align-items: center;
    gap: 32px;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navlink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6px;
    height: 100%;
    gap: 16px;
    width: 80%;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const GithubButton = styled.a`
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.6s ease-in-out;
    text-decoration: none;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_primary};
    }
`;

const LinkedInButton = styled.a`
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.6s ease-in-out;
    text-decoration: none;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_primary};
    }
`;

const MobileIcon = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const MobileMenu = styled.ul.withConfig({
    shouldForwardProp: (prop) => prop !== 'isopen',  
})`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    padding: 0 6px;
    list-style: none;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    position: absolute;
    top: 80px;
    right: 0;
    transition: all 0.6s ease-in-out;
    transform: ${({ isopen }) =>
        isopen ? "translateY(0)" : "translateY(-100%)"};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isopen }) => (isopen ? "100%" : "0")};
    z-index: ${({ isopen }) => (isopen ? "1000" : "-1000")};
`;

const Navbar = () => {
    const [isopen, setIsopen] = useState(false);
    const theme = useTheme();
    return (
        <Nav>
        <NavbarContainer>
            <Navlogo to="/">Portfolio</Navlogo>

            <MobileIcon onClick={() => setIsopen(!isopen)}>
                <MenuRounded style={{ color: "inherit"}}/>
            </MobileIcon>

            <NavItems>
                <Navlink href="#About">About</Navlink>
                <Navlink href="#Experience">Experience</Navlink>
                <Navlink href="#Skills">Skills</Navlink>
                {/* <Navlink href="#Projects">Projects</Navlink> */}
                <Navlink href="#Education">Education</Navlink>
            </NavItems>

            {
                isopen && (
                    <MobileMenu isopen={isopen}>
                      <Navlink onClick={() => setIsopen(!isopen)} href="#About">
                        About
                      </Navlink>
                      <Navlink onClick={() => setIsopen(!isopen)} href="#Experience">
                        Experience
                      </Navlink>
                      <Navlink onClick={() => setIsopen(!isopen)} href="#Skills">
                        Skills
                      </Navlink>
                            {/* <Navlink onClick={() => setIsOpen(!isOpen)} href="#Projects">
                                Projects
                        </Navlink> */}
                      <Navlink onClick={() => setIsopen(!isopen)} href="#Education">
                        Education
                      </Navlink>
                      <GithubButton
                        href={Bio.github}
                        target="_Blank"
                        style={{
                          background: theme.primary,
                          color: theme.text_primary,
                        }}
                      >
                        Github Profile
                      </GithubButton>
                      <LinkedInButton
                        href={Bio.linkedin}
                        target="_Blank"
                        style={{
                          background: theme.primary,
                          color: theme.text_primary,
                        }}
                      >
                        LinkedIn Profile
                      </LinkedInButton>
                    </MobileMenu>
                  )
            }

            <ButtonContainer>
                <GithubButton href={Bio.github} target="_Blank">Github Profile</GithubButton>
                <LinkedInButton href={Bio.linkedin} target="_Blank">LinkedIn Profile</LinkedInButton>
            </ButtonContainer>
        </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
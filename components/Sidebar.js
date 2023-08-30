import { styled } from 'styled-components'

const Sidebar = () => {
    return (
        <Menu>
            <Overflow>
                <Container>
                    <Content>
                        <Logo>
                            <h1>Weather</h1>
                            <Divider />
                        </Logo>
                        <Links>
                            <LinkWrapper>
                                <Link href="/">
                                    <LinkInner>
                                        <LinkWidth>
                                            <LinkIcon stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-18176s2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path></LinkIcon>
                                            <LinkItem>
                                                <LinkText>Charts</LinkText>
                                            </LinkItem>
                                        </LinkWidth>
                                    </LinkInner>
                                </Link>
                                <Link href="/test">
                                    <LinkInner>
                                        <LinkWidth>
                                            <LinkIcon stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-18176s2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></LinkIcon>
                                            <LinkItem>
                                                <LinkText>Documentation</LinkText>
                                            </LinkItem>
                                        </LinkWidth>
                                    </LinkInner>
                                </Link>
                            </LinkWrapper>
                        </Links>
                    </Content>
                </Container>
            </Overflow>
        </Menu>
    )
}

export default Sidebar

const Menu = styled.div`
background: #fff;
-webkit-transition: 0.2s linear;
transition: 0.2s linear;
width: 300px;
height: 100vh;
margin: 0px;
min-height: 100%;
overflow-x: hidden;
box-shadow: 
`

const Container = styled.div`
height: 100%;
-webkit-margin-end: 0px!important;
margin-inline-end: 0px!important;

@media screen and (min-width: 960px) {
    -webkit-margin-end: -16px!important;
    margin-inline-end: -16px!important;
}
`

const Content = styled.div`
display: flex;
flex-direction: column;
height: 100%;
padding-top: 25px;
border-radius: 30px;
`

const Overflow = styled.div`
position: relative;
overflow: hidden;
width: 100%;
height: 100%;
`

const Logo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Divider = styled.div`
display: flex;
height: 1px;
width: 100%;
background: rgba(135, 140, 189, 0.3);
margin-bottom: 20px;
`

const Links = styled.div`
flex-direction: column;
margin-top: 8px;
margin-bottom: auto;
display: flex;
`

const LinkWrapper = styled.div`
padding-inline-start: 20px;

@media screen and (min-width: 960px){
    -webkit-padding-end: 16px;
    padding-inline-end: 16px;
}
`

const Link = styled.a`
background-color: transparent;
color: inherit;
text-decoration: inherit;
`

const LinkInner = styled.div`
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-ms-flex-direction: row;
flex-direction: row;
padding-top: 5px;
padding-bottom: 5px;
padding-inline-start: 10px;
`

const LinkWidth = styled.div`
justify-content: center;
width: 100%;
align-items: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    display: flex;
`

const LinkItem = styled.div`
color: #422afb;
margin-inline-end: 18px;
`

const LinkIcon = styled.svg`
width: 20px;
height: 20px;
display: inline-block;
line-height: 1em;
-ms-flex-negative: 0;
flex-shrink: 0;
color: inherit;
`

const LinkText = styled.p`
margin-inline-end: auto;
color: #2d3748;
font-weight: 700;
`
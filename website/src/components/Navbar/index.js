import React from 'react';

// Carbon Design System
import { Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction } from 'carbon-components-react/lib/components/UIShell';
import LogoGithub20 from '@carbon/icons-react/lib/logo--github/20';
import LogoTwitter20 from '@carbon/icons-react/lib/logo--twitter/20';

const Navbar = (props) => {
    return (
        <Header aria-label="IBM Watson">
            <HeaderName href="/" prefix="IBM">
                {props.name}
            </HeaderName>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Github" onClick={() => window.open("https://github.com/victorshinya")}>
                    <LogoGithub20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Twitter" onClick={() => window.open("https://twitter.com/victorshinya")}>
                    <LogoTwitter20 />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
    )
}

export default Navbar;

import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

const {styled: _styled,theme} = createStitches({
    theme: {
        fonts: {
            general: "Open Sans"
        }
    }
});


//Adding TS types
const styled = (component: string, css: Stitches.CSS) => _styled(component, css)

export {styled, theme}

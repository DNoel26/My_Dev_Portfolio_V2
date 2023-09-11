/** @format */

import rgba from 'color-rgba';
import { Opaque } from 'type-fest';

type TColorRgba = Opaque<
    {
        r: number;
        g: number;
        b: number;
        a: number;
    },
    'TRgba'
>;
interface IBgSvgOptions {
    colorPrimary: string;
    colorSecondary: string;
}

const toRgbaObject = (color: string): TColorRgba | null => {
    const rgbaArray = rgba(color);
    if (!rgbaArray) return null;
    return {
        r: rgbaArray[0],
        g: rgbaArray[1],
        b: rgbaArray[2],
        a: rgbaArray[3],
    } as TColorRgba;
};

const getRgbaString = (colorObj: TColorRgba | null) => {
    if (!colorObj) return null;
    return `rgba(${colorObj.r}%2c ${colorObj.g}%2c ${colorObj.b}%2c ${colorObj.a})`;
};

// rgb(0, 119, 230) - blue (primary)
// rgb(165, 39, 148) - purple (secondary)
export const handleBgSvgColorChangeDark = (options: IBgSvgOptions) => {
    const width = 1920;
    const height = 1080;
    const colorPrimary = toRgbaObject(options.colorPrimary);
    const colorSecondary = toRgbaObject(options.colorSecondary);
    const rgbaPrimary = getRgbaString({ ...colorPrimary, a: 0.3 } as TColorRgba);
    const rgbaSecondary = getRgbaString({ ...colorSecondary, a: 0.3 } as TColorRgba);
    const str1 = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='${width}' height='${height}' preserveAspectRatio='none' viewBox='0 0 ${width} ${height}'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1598%26quot%3b)' fill='none'%3e%3crect width='${width}' height='${height}' x='0' y='0' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/rect%3e%3ccircle r='128.38935994457194' cx='719.36' cy='500.37' `;
    const str2Secondary = `fill='${rgbaSecondary}'%3e%3c/circle%3e%3ccircle r='90' cx='191.81' cy='219.38' `;
    const str3Primary = `fill='${rgbaPrimary}'%3e%3c/circle%3e%3crect width='648' height='648' clip-path='url(%26quot%3b%23SvgjsClipPath1599%26quot%3b)' x='-144.97' y='513.97' fill='url(%26quot%3b%23SvgjsPattern1600%26quot%3b)' transform='rotate(344.09%2c 179.03%2c 837.97)'%3e%3c/rect%3e%3crect width='94.2' height='94.2' clip-path='url(%26quot%3b%23SvgjsClipPath1601%26quot%3b)' x='321.04' y='541.32' fill='url(%26quot%3b%23SvgjsPattern1602%26quot%3b)' transform='rotate(185.67%2c 368.14%2c 588.42)'%3e%3c/rect%3e%3cpath d='M1405.44 450.58L1394.61 457.41 1385.57 448.33 1374.74 455.16 1365.7 446.09 1354.86 452.92 1345.82 443.85M1406.34 442.63L1395.51 449.46 1386.47 440.39 1375.63 447.21 1366.59 438.14 1355.76 444.97 1346.72 435.9' `;
    const str4Secondary = `stroke='${rgbaSecondary}' stroke-width='1.83' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3ccircle r='90' cx='1240.75' cy='897.52' fill='rgba(250%2c 250%2c 250%2c 0.3)'%3e%3c/circle%3e%3crect width='150.84' height='150.84' clip-path='url(%26quot%3b%23SvgjsClipPath1603%26quot%3b)' x='1763.55' y='639.55' fill='url(%26quot%3b%23SvgjsPattern1604%26quot%3b)' transform='rotate(24.89%2c 1838.97%2c 714.97)'%3e%3c/rect%3e%3crect width='84' height='84' clip-path='url(%26quot%3b%23SvgjsClipPath1605%26quot%3b)' x='512.64' y='504.02' fill='url(%26quot%3b%23SvgjsPattern1606%26quot%3b)' transform='rotate(307.33%2c 554.64%2c 546.02)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1598'%3e%3crect width='${width}' height='${height}' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='648' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1600'%3e%3crect width='648' height='3' x='0' y='0' fill='rgba(250%2c 250%2c 250%2c 0.3)'%3e%3c/rect%3e%3crect width='648' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1599'%3e%3ccircle r='162' cx='179.03' cy='837.97'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.42' height='9.42' patternUnits='userSpaceOnUse' id='SvgjsPattern1602'%3e%3cpath d='M0 9.42L4.71 0L9.42 9.42' `;
    const str5Secondary = `stroke='${rgbaSecondary}' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1601'%3e%3ccircle r='23.55' cx='368.14' cy='588.42'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='8.38' height='8.38' patternUnits='userSpaceOnUse' id='SvgjsPattern1604'%3e%3cpath d='M0 8.38L4.19 0L8.38 8.38' `;
    const str6Secondary = `stroke='${rgbaSecondary}' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1603'%3e%3ccircle r='37.71' cx='1838.97' cy='714.97'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1606'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(250%2c 250%2c 250%2c 0.3)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1605'%3e%3ccircle r='21' cx='554.64' cy='546.02'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`;

    return (
        str1 + str2Secondary + str3Primary + str4Secondary + str5Secondary + str6Secondary
    );
};

export const handleBgSvgColorChangeLight = (options: IBgSvgOptions) => {
    const width = 1920;
    const height = 1080;
    const colorPrimary = toRgbaObject(options.colorPrimary);
    const colorSecondary = toRgbaObject(options.colorSecondary);
    const rgbaPrimaryBg = getRgbaString({ ...colorPrimary, a: 0.05 } as TColorRgba);
    const rgbaSecondary = getRgbaString({ ...colorSecondary, a: 0.5 } as TColorRgba);
    const str1 = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='${height}' preserveAspectRatio='none' viewBox='0 0 ${width} ${height}'%3e%3cg mask='url(%26quot%3b%23SvgjsMask7180%26quot%3b)' fill='none'%3e%3crect width='${width}' height='${height}' x='0' y='0' `;
    const str2Primary = `fill='${rgbaPrimaryBg}'%3e%3c/rect%3e%3cpath d='M568.32 74.37L560.33 64.37 568.33 54.37 560.33 44.37 568.33 34.37 560.33 24.37 568.33 14.37M576.32 74.37L568.33 64.37 576.33 54.37 568.33 44.37 576.33 34.37 568.33 24.37 576.33 14.37' `;
    const str3Secondary = `stroke='${rgbaSecondary}' stroke-width='1' stroke-dasharray='2%2c 2'%3e%3c/path%3e%3crect width='304.52' height='304.52' clip-path='url(%26quot%3b%23SvgjsClipPath7181%26quot%3b)' x='529.86' y='-40.43' fill='url(%26quot%3b%23SvgjsPattern7182%26quot%3b)' transform='rotate(24.06%2c 682.12%2c 111.83)'%3e%3c/rect%3e%3cpath d='M424.20000000000005 472.03999999999996 L557.88 421.3L437.2880904154801 392.91809041548004z' fill='rgba(18%2c 18%2c 18%2c 0.5)'%3e%3c/path%3e%3crect width='663.12' height='663.12' clip-path='url(%26quot%3b%23SvgjsClipPath7183%26quot%3b)' x='234.24' y='531.39' fill='url(%26quot%3b%23SvgjsPattern7184%26quot%3b)' transform='rotate(209.92%2c 565.8%2c 862.95)'%3e%3c/rect%3e%3crect width='696' height='696' clip-path='url(%26quot%3b%23SvgjsClipPath7185%26quot%3b)' x='804.48' y='-138.12' fill='url(%26quot%3b%23SvgjsPattern7186%26quot%3b)' transform='rotate(202.57%2c 1152.48%2c 209.88)'%3e%3c/rect%3e%3ccircle r='105.94640771394675' cx='275.14' cy='682.9' fill='rgba(18%2c 18%2c 18%2c 0.5)'%3e%3c/circle%3e%3cpath d='M1776.96 615.56a5.6 5.6 0 1 0 8.23-7.61 5.6 5.6 0 1 0-8.23 7.61zM1788.71 604.69a5.6 5.6 0 1 0 8.22-7.6 5.6 5.6 0 1 0-8.22 7.6zM1800.46 593.83a5.6 5.6 0 1 0 8.22-7.6 5.6 5.6 0 1 0-8.22 7.6zM1812.21 582.97a5.6 5.6 0 1 0 8.22-7.61 5.6 5.6 0 1 0-8.22 7.61zM1764.33 649.03a5.6 5.6 0 1 0 8.23-7.61 5.6 5.6 0 1 0-8.23 7.61zM1776.08 638.17a5.6 5.6 0 1 0 8.22-7.61 5.6 5.6 0 1 0-8.22 7.61zM1787.83 627.3a5.6 5.6 0 1 0 8.22-7.6 5.6 5.6 0 1 0-8.22 7.6zM1799.57 616.44a5.6 5.6 0 1 0 8.23-7.6 5.6 5.6 0 1 0-8.23 7.6z' stroke='rgba(18%2c 18%2c 18%2c 0.5)' stroke-width='1' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3crect width='240' height='240' clip-path='url(%26quot%3b%23SvgjsClipPath7187%26quot%3b)' x='263.64' y='382.42' fill='url(%26quot%3b%23SvgjsPattern7188%26quot%3b)' transform='rotate(157.19%2c 383.64%2c 502.42)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask7180'%3e%3crect width='${width}' height='${height}' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6.62' height='6.62' patternUnits='userSpaceOnUse' id='SvgjsPattern7182'%3e%3cpath d='M0 6.62L3.31 0L6.62 6.62' `;
    const str4Secondary = `stroke='${rgbaSecondary}' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath7181'%3e%3ccircle r='76.13' cx='682.12' cy='111.83'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='663.12' height='6.14' patternUnits='userSpaceOnUse' id='SvgjsPattern7184'%3e%3crect width='663.12' height='3.07' x='0' y='0' `;
    const str5Secondary = `fill='${rgbaSecondary}'%3e%3c/rect%3e%3crect width='663.12' height='3.07' x='0' y='3.07' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath7183'%3e%3ccircle r='165.78' cx='565.8' cy='862.95'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='696' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern7186'%3e%3crect width='696' height='3' x='0' y='0' fill='rgba(250%2c 250%2c 250%2c 1)'%3e%3c/rect%3e%3crect width='696' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath7185'%3e%3ccircle r='174' cx='1152.48' cy='209.88'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern7188'%3e%3cpath d='M3 1L3 5M1 3L5 3' `;
    const str6Secondary = `stroke='${rgbaSecondary}' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath7187'%3e%3ccircle r='60' cx='383.64' cy='502.42'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`;

    return (
        str1 + str2Primary + str3Secondary + str4Secondary + str5Secondary + str6Secondary
    );
};

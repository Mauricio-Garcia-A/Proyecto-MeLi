import React from 'react';

export default function IconoFormaDePago(props) {

    function tipoIcono(titulo) {
        switch (titulo) {
            case 'TDC':
                return 	<>  <path d="M239.1 608.8c-2.3 0-4.1.6-5.4 1.9-1.3 1.3-2.1 3.1-2.4 5.3h15.5c-.2-2.4-1-4.2-2.4-5.4-1.4-1.2-3.2-1.8-5.3-1.8zM100.6 532.9c3.3 0 5.5-1.7 6.5-5.2s1.5-8.4 1.5-15c0-6.8-.5-11.9-1.5-15.1-1-3.3-3.2-4.9-6.5-4.9s-5.5 1.7-6.6 4.9c-1.1 3.3-1.6 8.3-1.6 15.1 0 6.5.5 11.5 1.6 15s3.2 5.2 6.6 5.2zM362.9 621.4l-2.1.4c-1.9.3-3.3.7-4.1 1.2-1.4.8-2.1 2.1-2.1 3.8 0 1.6.4 2.7 1.3 3.3.9.7 1.9 1 3.2 1 2 0 3.8-.6 5.4-1.7s2.5-3.2 2.6-6.2v-3.3c-.6.3-1.1.6-1.7.9-.7.2-1.5.4-2.5.6zM367.2 492.7c-3.3 0-5.5 1.7-6.6 4.9-1.1 3.3-1.6 8.3-1.6 15.1 0 6.5.5 11.5 1.6 14.9 1.1 3.5 3.3 5.2 6.6 5.2s5.4-1.7 6.5-5.2c1-3.4 1.5-8.4 1.5-14.9 0-6.8-.5-11.9-1.5-15.1-1-3.2-3.2-4.9-6.5-4.9zM322.8 492.7c-3.3 0-5.5 1.7-6.6 4.9-1.1 3.3-1.6 8.3-1.6 15.1 0 6.5.5 11.5 1.6 14.9 1.1 3.5 3.3 5.2 6.6 5.2s5.5-1.7 6.5-5.2c1-3.4 1.5-8.4 1.5-14.9 0-6.8-.5-11.9-1.5-15.1-1.1-3.2-3.2-4.9-6.5-4.9zM145 492.7c-3.3 0-5.5 1.7-6.6 4.9-1.1 3.3-1.6 8.3-1.6 15.1 0 6.5.5 11.5 1.6 14.9 1.1 3.5 3.3 5.2 6.6 5.2s5.5-1.7 6.5-5.2c1-3.4 1.5-8.4 1.5-14.9 0-6.8-.5-11.9-1.5-15.1-1-3.2-3.2-4.9-6.5-4.9zM233.9 532.9c3.3 0 5.5-1.7 6.5-5.2s1.5-8.4 1.5-15c0-6.8-.5-11.9-1.5-15.1-1-3.3-3.2-4.9-6.5-4.9s-5.5 1.7-6.5 4.9c-1.1 3.3-1.6 8.3-1.6 15.1 0 6.5.5 11.5 1.6 15 1 3.5 3.2 5.2 6.5 5.2z" />
                            <path d="M546.2 600v-66.5l8.3-4.8 49.2-28.4 28.4-49.2 4.8-8.3h66.5l49.2-28.4 8.3-4.8 8.3 4.8 49.3 28.4H885l4.8 8.3 19.7 34.2 8.7 15.1 7.9 4.6 16.7 9.6V176.7c0-34.8-27.9-63.1-62.3-63.1H72.3C38 113.6 10 141.9 10 176.7v470.2c0 34.8 28 63.1 62.3 63.1h470.9l-9.6-16.6-9.6-16.7-6.2-10.7-4.8-8.3 4.8-8.3 28.4-49.4zm-95 29.2c1.4.9 3 1.3 5 1.3s3.7-.5 5-1.6c.7-.5 1.3-1.3 1.9-2.3h9.2c-.2 2-1.3 4.1-3.3 6.2-3.1 3.3-7.4 5-12.9 5-4.6 0-8.6-1.4-12.1-4.2-3.5-2.8-5.2-7.4-5.2-13.8 0-6 1.6-10.5 4.7-13.7 3.2-3.2 7.2-4.8 12.3-4.8 3 0 5.7.5 8.1 1.6 2.4 1.1 4.4 2.8 5.9 5.1 1.4 2 2.3 4.4 2.7 7.1.2 1.6.4 3.8.3 6.8h-25c-.1 3.5 1.1 5.9 3.4 7.3zm20.1-94.8c-2.9 5.1-7.9 7.6-15.2 7.6-7.2 0-12.3-2.5-15.2-7.6-2.9-5-4.3-12.2-4.3-21.6s1.5-16.6 4.3-21.6c2.9-5.1 8-7.6 15.2-7.6 7.2 0 12.2 2.5 15.2 7.6 2.9 5 4.3 12.3 4.3 21.6 0 9.4-1.4 16.5-4.3 21.6zm-48.2 77.1c-.8-1.6-2.3-2.4-4.4-2.4-2.5 0-4.2 1-5.1 3.1-.5 1.1-.7 2.4-.7 3.9v20.5h-9v-20.5c0-2-.2-3.5-.6-4.4-.7-1.7-2.2-2.5-4.4-2.5-2.6 0-4.3.8-5.2 2.5-.5 1-.7 2.3-.7 4.2v20.7h-9.1v-34.3h8.7v5c1.1-1.8 2.2-3.1 3.2-3.8 1.7-1.3 4-2 6.8-2 2.6 0 4.7.6 6.4 1.7 1.3 1.1 2.3 2.4 3 4.2 1.2-2 2.6-3.5 4.4-4.5 1.9-1 3.9-1.4 6.2-1.4 1.5 0 3 .3 4.5.9 1.5.6 2.8 1.6 4 3.1 1 1.2 1.6 2.7 2 4.4.2 1.1.3 2.9.3 5.1l-.1 21.6h-9.2v-21.9c-.4-1.2-.6-2.3-1-3.2zm-57.5-2c-1-.5-2.5-.8-4.4-.8-2.1 0-3.7.5-4.6 1.6-.6.8-1.1 1.8-1.3 3.1h-8.7c.2-3 1-5.5 2.5-7.4 2.4-3 6.5-4.5 12.3-4.5 3.8 0 7.1.7 10.1 2.2 2.9 1.5 4.4 4.3 4.4 8.4v15.8c0 1.1 0 2.4.1 4 .1 1.2.2 2 .5 2.4.3.4.7.8 1.3 1v1.3H368c-.3-.7-.4-1.4-.6-2-.1-.6-.2-1.3-.3-2.1-1.2 1.3-2.7 2.5-4.3 3.4-2 1.1-4.1 1.7-6.6 1.7-3.1 0-5.7-.9-7.8-2.7-2-1.8-3.1-4.3-3.1-7.5 0-4.2 1.6-7.3 4.9-9.2 1.8-1 4.4-1.8 7.9-2.2l3.1-.4c1.7-.2 2.9-.5 3.6-.8 1.3-.5 1.9-1.4 1.9-2.5.4-1.3-.1-2.3-1.1-2.8zm1.6-67.5c-7.2 0-12.3-2.5-15.2-7.6-2.9-5-4.4-12.2-4.4-21.6s1.5-16.6 4.4-21.6c2.9-5.1 8-7.6 15.2-7.6 7.2 0 12.2 2.5 15.1 7.6 2.9 5 4.4 12.3 4.4 21.6s-1.5 16.5-4.4 21.6c-2.8 5.1-7.9 7.6-15.1 7.6zm24.9-29.2c0-9.3 1.5-16.6 4.4-21.6 2.9-5.1 8-7.6 15.2-7.6 7.2 0 12.2 2.5 15.2 7.6 2.9 5 4.3 12.3 4.3 21.6s-1.4 16.5-4.3 21.6c-2.9 5.1-7.9 7.6-15.2 7.6-7.2 0-12.2-2.5-15.2-7.6-2.9-5.1-4.4-12.2-4.4-21.6zm-54.2 21.6c-2.9 5.1-7.9 7.6-15.1 7.6-7.2 0-12.3-2.5-15.2-7.6-2.9-5-4.4-12.2-4.4-21.6s1.4-16.6 4.4-21.6c2.9-5.1 7.9-7.6 15.2-7.6 7.2 0 12.2 2.5 15.1 7.6 2.9 5 4.4 12.3 4.4 21.6 0 9.4-1.5 16.5-4.4 21.6zm1.7 55.8v46.5h-9.7l-18.9-33v33h-9v-46.5h10.2l18.4 32.4v-32.4h9zm-104.9 39c1.4.9 3 1.3 5 1.3s3.7-.5 5-1.6c.7-.5 1.3-1.3 1.9-2.3h9.2c-.2 2-1.3 4.1-3.3 6.2-3.1 3.3-7.4 5-12.9 5-4.6 0-8.6-1.4-12.1-4.2-3.5-2.8-5.2-7.4-5.2-13.8 0-6 1.6-10.5 4.7-13.7 3.2-3.2 7.2-4.8 12.3-4.8 3 0 5.7.5 8.1 1.6 2.4 1.1 4.4 2.8 5.9 5.1 1.4 2 2.3 4.4 2.7 7.1.2 1.6.4 3.8.3 6.8h-25c-.1 3.5 1.1 5.9 3.4 7.3zm-28.1-17.7c-.8-1.6-2.3-2.4-4.4-2.4-2.5 0-4.2 1-5.1 3.1-.5 1.1-.7 2.4-.7 3.9v20.5h-9v-20.5c0-2-.2-3.5-.6-4.4-.8-1.7-2.2-2.5-4.4-2.5-2.6 0-4.3.8-5.2 2.5-.5 1-.7 2.3-.7 4.2v20.7h-9.1v-34.3h8.7v5c1.1-1.8 2.2-3.1 3.2-3.8 1.7-1.3 4-2 6.8-2 2.6 0 4.7.6 6.4 1.7 1.3 1.1 2.3 2.4 3 4.2 1.2-2 2.6-3.5 4.4-4.5 1.9-1 3.9-1.4 6.2-1.4 1.5 0 3 .3 4.5.9 1.5.6 2.8 1.6 4 3.1 1 1.2 1.6 2.7 1.9 4.4.2 1.1.3 2.9.3 5.1l-.1 21.6h-9.2v-21.9c-.3-1.2-.5-2.3-.9-3.2zm-57.5-2c-1-.5-2.5-.8-4.4-.8-2.1 0-3.7.5-4.6 1.6-.6.8-1.1 1.8-1.3 3.1h-8.7c.2-3 1-5.5 2.5-7.4 2.4-3 6.5-4.5 12.3-4.5 3.8 0 7.1.7 10.1 2.2 2.9 1.5 4.4 4.3 4.4 8.4v15.8c0 1.1 0 2.4.1 4 .1 1.2.2 2 .5 2.4.3.4.7.8 1.3 1v1.3h-9.8c-.2-.7-.4-1.4-.6-2-.1-.6-.2-1.3-.3-2.1-1.3 1.3-2.7 2.5-4.3 3.4-2 1.1-4.2 1.7-6.6 1.7-3.1 0-5.7-.9-7.8-2.7-2-1.8-3.1-4.3-3.1-7.5 0-4.2 1.6-7.3 4.9-9.2 1.8-1 4.4-1.8 7.9-2.2l3.1-.4c1.7-.2 2.9-.5 3.6-.8 1.3-.5 1.9-1.4 1.9-2.5.4-1.3-.1-2.3-1.1-2.8zm11.1-75.1c-2.9 5.1-8 7.6-15.2 7.6-7.2 0-12.3-2.5-15.2-7.6-2.9-5-4.3-12.2-4.3-21.6s1.4-16.6 4.3-21.6c2.9-5.1 8-7.6 15.2-7.6 7.2 0 12.2 2.5 15.2 7.6 2.9 5 4.4 12.3 4.4 21.6-.1 9.4-1.5 16.5-4.4 21.6zm-51.9-182.5v-33.2h33.5v33.9h-33.4c0-.2-.1-.5-.1-.7zm130.7 0c0 .3-.1.5-.1.8h-33.4v-33.9H239v33.1zm-33.5 18.2h29.8c-5.4 12.7-16.4 22.3-29.8 26.3v-26.3zm-8.7-68.8h-8.7v51.4h-28.8V268h33.1c21.1 0 38.7 14.2 44.5 33.4h-40.1v-.1zm-55 0h-31.3c4.5-15 16.3-26.8 31.3-31.2v31.2zm0 68.8v26.3c-13.4-4-24.4-13.6-29.8-26.3h29.8zm17.5 0h28.8v28.4h-28.8v-28.4zm30.1 113.5c7.2 0 12.2 2.5 15.2 7.6 2.9 5 4.4 12.3 4.4 21.6 0 9.4-1.5 16.5-4.4 21.6-2.9 5-8 7.5-15.2 7.5-7.2 0-12.3-2.5-15.2-7.5-2.9-5-4.4-12.2-4.4-21.6 0-9.3 1.5-16.6 4.4-21.6 3-5.1 8-7.6 15.2-7.6zm-88.8 0c7.2 0 12.2 2.5 15.2 7.6 2.9 5 4.3 12.3 4.3 21.6 0 9.4-1.4 16.5-4.3 21.6-2.9 5-8 7.5-15.2 7.5-7.2 0-12.3-2.5-15.2-7.5-2.9-5-4.3-12.2-4.3-21.6 0-9.3 1.4-16.6 4.3-21.6 2.9-5.1 7.9-7.6 15.2-7.6zM85.4 590.2h10.2l18.4 32.4v-32.4h9v46.5h-9.7l-18.9-33v33h-9.1v-46.5zm129-77.4c0-9.3 1.5-16.6 4.4-21.6 2.9-5.1 7.9-7.6 15.2-7.6 7.2 0 12.2 2.5 15.2 7.6 2.9 5 4.4 12.3 4.4 21.6s-1.5 16.5-4.4 21.6c-2.9 5.1-8 7.6-15.2 7.6-7.2 0-12.2-2.5-15.2-7.6s-4.4-12.2-4.4-21.6zm562.8-149.9c-13.2 0-25.5-3.2-36.7-8.6-13.6 8.6-29.5 13.8-46.7 13.8-48.3 0-87.7-39.3-87.7-87.7 0-48.3 39.3-87.7 87.7-87.7 15 0 28.9 4.1 41.2 10.8 12.5-7.1 26.8-11.6 42.2-11.6 47.1 0 85.5 38.3 85.5 85.5-.1 47.1-38.4 85.5-85.5 85.5z" />
                            <path d="M456.1 492.7c-3.3 0-5.5 1.7-6.6 4.9-1.1 3.3-1.6 8.3-1.6 15.1 0 6.5.5 11.5 1.6 14.9 1.1 3.5 3.3 5.2 6.6 5.2s5.5-1.7 6.5-5.2c1-3.4 1.5-8.4 1.5-14.9 0-6.8-.5-11.9-1.5-15.1-1-3.2-3.1-4.9-6.5-4.9zM411.7 532.9c3.3 0 5.5-1.7 6.5-5.2s1.5-8.4 1.5-15c0-6.8-.5-11.9-1.5-15.1-1-3.3-3.2-4.9-6.5-4.9s-5.5 1.7-6.6 4.9c-1.1 3.3-1.6 8.3-1.6 15.1 0 6.5.5 11.5 1.6 15s3.3 5.2 6.6 5.2zM146.4 621.4l-2.1.4c-1.9.3-3.3.7-4.1 1.2-1.4.8-2.1 2.1-2.1 3.8 0 1.6.4 2.7 1.3 3.3.9.7 1.9 1 3.2 1 2 0 3.8-.6 5.4-1.7s2.5-3.2 2.6-6.2v-3.3c-.6.3-1.1.6-1.7.9-.7.2-1.5.4-2.5.6zM189.4 532.9c3.3 0 5.5-1.7 6.5-5.2s1.5-8.4 1.5-15c0-6.8-.5-11.9-1.5-15.1-1-3.3-3.2-4.9-6.5-4.9s-5.5 1.7-6.6 4.9c-1.1 3.3-1.6 8.3-1.6 15.1 0 6.5.5 11.5 1.6 15 1.2 3.5 3.4 5.2 6.6 5.2zM455.6 608.8c-2.3 0-4.1.6-5.4 1.9-1.3 1.3-2.1 3.1-2.4 5.3h15.5c-.2-2.4-1-4.2-2.4-5.4-1.4-1.2-3.2-1.8-5.3-1.8zM708.6 275.2H692c.1-3.8.5-7.5 1.1-11.1h63.5c-.9-4.6-2.2-9-3.9-13.3H696.3c1.3-4 2.9-7.8 4.7-11.5h45.8c-2.9-4.8-6.2-9.3-10.1-13.3H709.3c3.2-4.2 6.6-8 10.5-11.5-8.1-3.2-16.9-5.1-26-5.1-39.2 0-71 31.9-71 71 0 39.2 31.8 71 71 71 11 0 21.4-2.7 30.7-7.3-3-2.4-6-4.8-8.7-7.5h13.3c2.1-1.6 3.7-3.8 5.5-5.6 2.6-2.5 5.4-4.8 7.6-7.7H705.3c-2.1-3.3-3.9-6.7-5.6-10.2H748.8c2.3-4.2 4.1-8.6 5.5-13.3H695.1c-1-3.7-1.7-7.5-2.3-11.4h64.1c.5-3.4 1-6.8 1-10.4 0-1-.2-1.9-.3-2.9l-49 .1zM959.3 543.2l-16.3-9.4-16.6-9.6-16.6-9.6-3.5-2-30.7-53.1h-61.4l-53.1-30.7-53.1 30.5h-61.3L616 512.5l-53.1 30.6v61.3l-30.6 53.1 11 19.1 9.6 16.6 9.6 16.7.4.7V772l53.1 30.7 30.7 53.1H708l53.1 30.7 53.1-30.7h61.3l30.7-53.1 53.1-30.7v-61.3l30.7-53.1-30.7-53.1v-61.3zm-318.1 13.9c11.6-11.6 25.7-17.4 42.1-17.4 16.4 0 30.4 5.8 42.1 17.4 11.6 11.6 17.4 25.6 17.4 42.1 0 16.4-5.8 30.5-17.4 42.1-11.6 11.6-25.6 17.4-42.2 17.4-16.4 0-30.4-5.8-42.1-17.4-11.6-11.6-17.4-25.7-17.4-42.1.1-16.4 5.9-30.5 17.5-42.1zm67.2 219.6h-24.8L720 710l9.1-16.6 9.1-16.7 75.3-138.1h24.2l-75 138.1-9 16.7-9 16.6-36.3 66.7zm172.5-18.9c-11.6 11.6-25.6 17.5-42.1 17.5s-30.5-5.8-42.1-17.5c-11.6-11.6-17.4-25.6-17.4-42.1 0-2 .3-3.8.5-5.7.5-5.9 1.6-11.5 3.7-16.6 2.4-6 6.1-11.5 10.6-16.6.9-1 1.6-2.2 2.6-3.2 11.6-11.6 25.7-17.4 42.1-17.4 16.4 0 30.4 5.8 42.1 17.5.9.9 1.5 1.9 2.3 2.8 4.2 4.6 7.5 9.6 9.9 14.9 2.3 5 3.7 10.3 4.4 16 .4 2.8.8 5.5.8 8.4.1 16.3-5.7 30.3-17.4 42z" />
                            <path d="M683.3 624.6c7 0 13-2.5 18-7.4 4.9-5 7.4-11 7.4-18 0-7.1-2.5-13-7.4-18-5-5-11-7.4-18-7.4s-13 2.5-18 7.4c-5 5-7.4 10.9-7.4 18 0 7 2.5 13 7.4 18 5 5 11 7.4 18 7.4zM856.9 697.7c-1.9-2-4.2-3.2-6.4-4.4-3.5-1.8-7.3-3.1-11.6-3.1s-8.1 1.2-11.6 3.1c-2.3 1.2-4.5 2.4-6.4 4.4-3.5 3.5-5.3 7.7-6.3 12.3-.4 1.9-1.1 3.7-1.1 5.7 0 7 2.5 13 7.4 18 5 5 11 7.4 18 7.4s13-2.5 18-7.4c5-5 7.4-11 7.4-18 0-2.1-.7-3.8-1.1-5.7-1-4.6-2.8-8.8-6.3-12.3z" />
                        </>;
            case 'TDD':
                return  <>  <path d="M427.4 602.3c3.4 0 5.7-1.8 6.7-5.4 1-3.6 1.6-8.7 1.6-15.5 0-7.1-.5-12.3-1.6-15.7-1.1-3.4-3.3-5.1-6.7-5.1-3.4 0-5.7 1.7-6.8 5.1-1.1 3.4-1.7 8.6-1.7 15.7 0 6.8.6 11.9 1.7 15.5 1.1 3.6 3.4 5.4 6.8 5.4zM335 560.6c-3.4 0-5.7 1.7-6.8 5.1-1.1 3.4-1.7 8.6-1.7 15.8 0 6.7.5 11.9 1.7 15.5 1.1 3.6 3.4 5.4 6.8 5.4s5.7-1.8 6.7-5.4c1.1-3.6 1.6-8.7 1.6-15.5 0-7.1-.5-12.3-1.6-15.8-1-3.4-3.2-5.1-6.7-5.1zM473 681.2c-2.4 0-4.3.7-5.6 2-1.3 1.4-2.1 3.2-2.5 5.5H481c-.2-2.5-1-4.4-2.5-5.6-1.4-1.3-3.3-1.9-5.5-1.9zM473.7 560.6c-3.4 0-5.7 1.7-6.8 5.1-1.1 3.4-1.7 8.6-1.7 15.8 0 6.7.6 11.9 1.7 15.5 1.1 3.6 3.4 5.4 6.8 5.4s5.7-1.8 6.7-5.4c1-3.6 1.6-8.7 1.6-15.5 0-7.1-.6-12.3-1.6-15.8-1.1-3.4-3.3-5.1-6.7-5.1zM381.3 560.6c-3.4 0-5.7 1.7-6.8 5.1-1.1 3.4-1.7 8.6-1.7 15.8 0 6.7.6 11.9 1.7 15.5 1.1 3.6 3.4 5.4 6.8 5.4s5.7-1.8 6.7-5.4c1-3.6 1.6-8.7 1.6-15.5 0-7.1-.6-12.3-1.6-15.8-1.1-3.4-3.3-5.1-6.7-5.1zM376.7 694.3l-2.1.4c-2 .4-3.4.8-4.3 1.3-1.5.8-2.2 2.2-2.2 3.9 0 1.6.4 2.8 1.4 3.5.9.7 2 1.1 3.3 1.1 2 0 3.9-.6 5.6-1.8 1.7-1.2 2.6-3.3 2.7-6.5v-3.4l-1.8.9c-.7.2-1.5.4-2.6.6zM196.5 602.3c3.4 0 5.7-1.8 6.7-5.4 1-3.6 1.6-8.7 1.6-15.5 0-7.1-.5-12.3-1.6-15.7-1.1-3.4-3.3-5.1-6.7-5.1-3.4 0-5.7 1.7-6.8 5.1-1.1 3.4-1.7 8.6-1.7 15.7 0 6.8.6 11.9 1.7 15.5 1.1 3.6 3.4 5.4 6.8 5.4zM151.8 694.3l-2.1.4c-2 .4-3.4.8-4.3 1.3-1.5.8-2.2 2.2-2.2 3.9 0 1.6.4 2.8 1.4 3.5.9.7 2 1.1 3.3 1.1 2 0 3.9-.6 5.6-1.8 1.7-1.2 2.6-3.3 2.7-6.5v-3.4l-1.8.9c-.7.2-1.6.4-2.6.6zM248 681.2c-2.4 0-4.3.7-5.6 2-1.3 1.4-2.1 3.2-2.5 5.5H256c-.2-2.5-1-4.4-2.5-5.6-1.4-1.3-3.2-1.9-5.5-1.9zM104.1 602.3c3.4 0 5.7-1.8 6.8-5.4 1-3.6 1.6-8.7 1.6-15.5 0-7.1-.5-12.3-1.6-15.7-1.1-3.4-3.3-5.1-6.8-5.1-3.4 0-5.7 1.7-6.8 5.1-1.1 3.4-1.7 8.6-1.7 15.7 0 6.8.6 11.9 1.7 15.5 1.1 3.6 3.4 5.4 6.8 5.4zM150.3 560.6c-3.4 0-5.7 1.7-6.8 5.1-1.1 3.4-1.7 8.6-1.7 15.8 0 6.7.6 11.9 1.7 15.5 1.1 3.6 3.4 5.4 6.8 5.4s5.7-1.8 6.7-5.4c1.1-3.6 1.6-8.7 1.6-15.5 0-7.1-.5-12.3-1.6-15.8-1-3.4-3.3-5.1-6.7-5.1zM242.7 602.3c3.4 0 5.7-1.8 6.7-5.4 1-3.6 1.6-8.7 1.6-15.5 0-7.1-.5-12.3-1.6-15.7-1.1-3.4-3.3-5.1-6.7-5.1s-5.7 1.7-6.8 5.1c-1.1 3.4-1.7 8.6-1.7 15.7 0 6.8.5 11.9 1.7 15.5 1.1 3.6 3.4 5.4 6.8 5.4z" />
                            <path d="M914.9 166.5H74.8C39.1 166.5 10 196 10 232.1v488.6c0 36.2 29.1 65.6 64.8 65.6h549L606.4 769l-17.3-17.3-56.1-56.1c-13.5-13.5-13.5-35.4 0-48.9l79.2-79.2c6.8-6.7 15.6-10.1 24.5-10.1s17.7 3.4 24.5 10.1l58.7 58.7 166.5-166.5c6.5-6.5 15.3-10.1 24.5-10.1 9.1 0 18 3.7 24.5 10.1l9.7 9.7 17.3 17.3 17.3 17.3V232.1c-.1-36.1-29.1-65.6-64.8-65.6zM468.5 702.4c1.4.9 3.2 1.3 5.2 1.3 2.1 0 3.8-.5 5.2-1.7.7-.6 1.4-1.4 1.9-2.4h9.6c-.3 2.1-1.4 4.3-3.5 6.5-3.2 3.4-7.7 5.2-13.4 5.2-4.8 0-9-1.5-12.6-4.4-3.6-3-5.4-7.7-5.4-14.3 0-6.2 1.6-10.9 4.9-14.2 3.3-3.3 7.5-4.9 12.8-4.9 3.1 0 5.9.5 8.4 1.7 2.5 1.1 4.6 2.9 6.2 5.3 1.5 2.1 2.4 4.6 2.8 7.4.3 1.7.4 4 .3 7.1h-26c0 3.5 1.2 6 3.6 7.4zm20.9-98.5c-3 5.2-8.3 7.8-15.7 7.8-7.5 0-12.7-2.6-15.8-7.8-3-5.2-4.5-12.7-4.5-22.5 0-9.7 1.5-17.2 4.5-22.4 3-5.3 8.3-7.9 15.8-7.9s12.7 2.6 15.7 7.9c3 5.2 4.5 12.7 4.5 22.4s-1.5 17.2-4.5 22.5zM439.3 684c-.8-1.7-2.3-2.5-4.6-2.5-2.6 0-4.4 1.1-5.3 3.2-.5 1.1-.8 2.5-.8 4.1v21.3h-9.4v-21.3c0-2.1-.2-3.7-.7-4.6-.8-1.8-2.3-2.6-4.6-2.6-2.7 0-4.5.8-5.4 2.6-.5 1-.8 2.4-.8 4.4v21.5h-9.5v-35.6h9.1v5.2c1.2-1.8 2.2-3.1 3.3-4 1.8-1.4 4.2-2.1 7-2.1 2.7 0 4.9.6 6.6 1.8 1.3 1.1 2.4 2.5 3.1 4.3 1.2-2.1 2.7-3.7 4.5-4.6 1.9-1 4.1-1.5 6.4-1.5 1.6 0 3.1.3 4.6.9 1.5.6 2.9 1.7 4.2 3.2 1 1.3 1.7 2.8 2 4.6.2 1.2.3 2.9.3 5.3l-.1 22.5h-9.6v-22.7c.3-1.4.1-2.5-.3-3.4zm-59.8-2.1c-1-.5-2.5-.8-4.5-.8-2.2 0-3.8.5-4.7 1.7-.7.8-1.1 1.9-1.3 3.2h-9c.2-3.1 1.1-5.7 2.6-7.7 2.5-3.1 6.7-4.7 12.8-4.7 3.9 0 7.4.8 10.5 2.3 3.1 1.6 4.6 4.5 4.6 8.8V701c0 1.2 0 2.5.1 4.1.1 1.2.3 2.1.6 2.5.3.4.8.8 1.4 1.1v1.4h-10.2c-.3-.7-.5-1.4-.6-2-.1-.6-.2-1.4-.3-2.2-1.3 1.4-2.8 2.6-4.5 3.6-2 1.2-4.3 1.7-6.9 1.7-3.3 0-5.9-.9-8.1-2.8-2.1-1.9-3.2-4.5-3.2-7.9 0-4.4 1.7-7.5 5.1-9.5 1.9-1.1 4.6-1.8 8.3-2.3l3.2-.4c1.7-.2 3-.5 3.7-.8 1.3-.6 2-1.5 2-2.6 0-1.4-.5-2.4-1.6-3zm1.8-70.2c-7.5 0-12.7-2.6-15.8-7.9-3-5.2-4.5-12.7-4.5-22.4s1.5-17.2 4.5-22.5c3-5.3 8.3-7.9 15.8-7.9s12.7 2.7 15.7 7.9c3 5.3 4.5 12.8 4.5 22.5s-1.5 17.2-4.5 22.4c-3 5.3-8.3 7.9-15.7 7.9zm25.9-30.3c0-9.7 1.5-17.2 4.5-22.5 3-5.3 8.2-7.9 15.8-7.9 7.5 0 12.7 2.6 15.7 7.9 3 5.2 4.5 12.8 4.5 22.5s-1.5 17.2-4.5 22.5c-3 5.2-8.3 7.8-15.7 7.8-7.5 0-12.7-2.6-15.8-7.8-3-5.3-4.5-12.8-4.5-22.5zm-56.4 22.5c-3 5.2-8.3 7.8-15.8 7.8s-12.7-2.6-15.8-7.8c-3-5.2-4.5-12.7-4.5-22.5 0-9.7 1.5-17.2 4.5-22.4 3-5.3 8.3-7.9 15.8-7.9s12.7 2.6 15.8 7.9c3 5.2 4.5 12.7 4.5 22.4s-1.5 17.2-4.5 22.5zm1.7 57.9v48.3h-10.1l-19.7-34.3v34.3h-9.4v-48.3h10.6l19.2 33.7v-33.7h9.4zm-109 40.6c1.4.9 3.1 1.3 5.2 1.3s3.9-.5 5.2-1.7c.7-.6 1.4-1.4 1.9-2.4h9.5c-.3 2.1-1.4 4.3-3.5 6.5-3.2 3.4-7.7 5.2-13.4 5.2-4.8 0-9-1.5-12.6-4.4-3.6-3-5.4-7.7-5.4-14.3 0-6.2 1.6-10.9 4.9-14.2 3.3-3.3 7.5-4.9 12.8-4.9 3.1 0 5.9.5 8.4 1.7 2.5 1.1 4.6 2.9 6.2 5.3 1.5 2.1 2.4 4.6 2.8 7.4.3 1.7.4 4 .3 7.1h-26c.1 3.5 1.4 6 3.7 7.4zM214.3 684c-.8-1.7-2.4-2.5-4.6-2.5-2.6 0-4.3 1.1-5.3 3.2-.5 1.1-.8 2.5-.8 4.1v21.3h-9.4v-21.3c0-2.1-.2-3.7-.7-4.6-.8-1.8-2.3-2.6-4.6-2.6-2.7 0-4.5.8-5.4 2.6-.5 1-.7 2.4-.7 4.4v21.5h-9.5v-35.6h9.1v5.2c1.2-1.8 2.2-3.1 3.3-4 1.8-1.4 4.2-2.1 7-2.1 2.7 0 4.9.6 6.6 1.8 1.4 1.1 2.4 2.5 3.1 4.3 1.2-2.1 2.7-3.7 4.6-4.6 1.9-1 4.1-1.5 6.4-1.5 1.6 0 3.1.3 4.6.9 1.5.6 2.9 1.7 4.2 3.2 1 1.3 1.7 2.8 2 4.6.2 1.2.3 2.9.3 5.3l-.1 22.5H215v-22.7c0-1.4-.2-2.5-.7-3.4zm-59.7-2.1c-1-.5-2.5-.8-4.5-.8-2.2 0-3.8.5-4.8 1.7-.7.8-1.1 1.9-1.3 3.2h-9c.2-3.1 1.1-5.7 2.6-7.7 2.5-3.1 6.7-4.7 12.8-4.7 3.9 0 7.4.8 10.5 2.3 3.1 1.6 4.6 4.5 4.6 8.8V701c0 1.2 0 2.5.1 4.1.1 1.2.3 2.1.6 2.5.3.4.8.8 1.4 1.1v1.4h-10.2c-.3-.7-.5-1.4-.6-2-.1-.6-.2-1.4-.3-2.2-1.3 1.4-2.8 2.6-4.5 3.6-2 1.2-4.3 1.7-6.9 1.7-3.3 0-5.9-.9-8.1-2.8-2.1-1.9-3.2-4.5-3.2-7.9 0-4.4 1.7-7.5 5.1-9.5 1.9-1.1 4.6-1.8 8.3-2.3l3.2-.4c1.7-.2 3-.5 3.7-.8 1.3-.6 2-1.5 2-2.6 0-1.4-.5-2.4-1.5-3zm11.4-78c-3 5.2-8.3 7.8-15.8 7.8s-12.7-2.6-15.8-7.8c-3-5.2-4.5-12.7-4.5-22.5 0-9.7 1.5-17.2 4.5-22.4 3-5.3 8.3-7.9 15.8-7.9s12.7 2.6 15.8 7.9c3 5.2 4.5 12.7 4.5 22.4.1 9.7-1.4 17.2-4.5 22.5zm-53.8-189.7v-34.5H147V415h-34.7c0-.3-.1-.5-.1-.8zm135.8 0c0 .3-.1.5-.1.8h-34.7v-35.2H248v34.4zm-34.8 18.9h30.9c-5.6 13.2-17 23.2-30.9 27.4v-27.4zm-9-71.5h-9.1V415h-29.9v-88.1h34.4c21.9 0 40.3 14.7 46.2 34.7h-41.6zm-57.2 0h-32.5c4.7-15.6 16.9-27.8 32.5-32.5v32.5zm0 71.5v27.4c-13.9-4.1-25.3-14.1-30.9-27.4H147zm18.1 0H195v29.6h-29.9v-29.6zm31.4 118c7.5 0 12.7 2.6 15.7 7.9 3 5.2 4.5 12.8 4.5 22.5s-1.5 17.2-4.5 22.5c-3 5.2-8.3 7.9-15.7 7.9-7.5 0-12.7-2.6-15.8-7.9-3-5.2-4.5-12.8-4.5-22.5s1.5-17.2 4.5-22.5c3.1-5.3 8.3-7.9 15.8-7.9zm-92.4 0c7.5 0 12.7 2.6 15.7 7.9 3 5.2 4.5 12.8 4.5 22.5s-1.5 17.2-4.5 22.5c-3 5.2-8.3 7.9-15.7 7.9s-12.7-2.6-15.8-7.9c-3-5.2-4.5-12.8-4.5-22.5s1.5-17.2 4.5-22.5c3.1-5.3 8.3-7.9 15.8-7.9zM88.4 661.8H99l19.2 33.7v-33.7h9.4v48.3h-10.1l-19.7-34.3v34.3h-9.4v-48.3zm134-80.4c0-9.7 1.5-17.2 4.5-22.5 3-5.3 8.3-7.9 15.8-7.9s12.7 2.6 15.8 7.9c3 5.2 4.5 12.8 4.5 22.5s-1.5 17.2-4.5 22.5c-3 5.2-8.3 7.8-15.8 7.8s-12.7-2.6-15.8-7.8c-3-5.3-4.5-12.8-4.5-22.5zm584.8-155.8c-13.6 0-26.5-3.4-38.1-8.9-14.1 9-30.7 14.3-48.6 14.3-50.2 0-91.1-40.9-91.1-91.1s40.9-91.1 91.1-91.1c15.6 0 30 4.3 42.9 11.2 13-7.4 27.8-12 43.8-12 49 0 88.8 39.8 88.8 88.8s-39.8 88.8-88.8 88.8zM945 657.3l-94.5 94.4-17.3 17.3-17.2 17.3h98.9c35.7 0 64.7-29.4 64.7-65.5v-98.1L962.3 640 945 657.3z" />
                            <path d="M736 334.5H718.7c.1-4 .6-7.8 1.2-11.6H786c-.9-4.8-2.3-9.4-4.1-13.8h-58.5c1.4-4.1 3-8.1 4.9-11.9h47.6c-3-5-6.4-9.6-10.5-13.8h-28.5c3.3-4.3 6.9-8.3 10.9-12-8.4-3.3-17.5-5.3-27-5.3-40.7 0-73.8 33.1-73.8 73.8 0 40.7 33.1 73.8 73.8 73.8 11.5 0 22.2-2.9 31.9-7.5-3.1-2.5-6.2-5-9-7.9h13.8c2.1-1.7 3.8-3.9 5.7-5.8 2.7-2.6 5.6-5 7.9-8h-38.4c-2.2-3.4-4.1-7-5.8-10.6h51c2.4-4.4 4.3-9 5.8-13.8H722c-1.1-3.9-1.8-7.8-2.4-11.9h66.6c.5-3.6 1.1-7.1 1.1-10.8 0-1-.3-2-.3-3h-51zM990 563.4 979.6 553l-17.3-17.3-17.3-17.3-34.2-34.2-190.9 190.9-83.2-83.1-79.2 79.1 80.6 80.6 17.3 17.3 17.3 17.3 47.2 47.2.4-.5 46.7-46.7 17.3-17.3 17.3-17.3L945 608.3l17.3-17.3 17.3-17.3z" />
                        </>    ;                
            case 'CST':
                return  <>  <path d="M695.17 10.54c-16.63 3.33-39.4 12.53-53.72 21.74-101.81 65.74-85.7 216.42 27.63 259.91 22.77 8.7 60.88 11 84.93 4.86 68.56-17.14 117.42-83.65 111.53-151.7-6.9-76.74-64.46-132.51-139.67-135.07-13.31-.51-27.12-.26-30.7.26zm30.7 77.76c0 3.84 1.79 5.12 6.65 5.12 9.72 0 20.72 7.42 25.33 16.88 6.65 14.07 5.37 16.37-8.95 16.37-11.51 0-13.3-.77-15.35-6.4-3.84-10.23-7.68-7.42-7.68 5.63 0 12.28 0 12.28 13.3 18.67 7.93 3.84 15.86 9.98 19.44 15.35 12.54 18.42 1.54 42.98-21.74 49.37-9.72 2.56-11 3.84-11 9.98 0 5.37-1.28 7.16-5.12 7.16-4.09 0-5.12-1.79-5.12-7.67 0-6.65-1.03-7.67-6.65-7.67-12.02 0-23.54-7.42-29.16-18.93-8.19-17.4-7.42-19.44 8.7-19.44 13.04 0 13.81.26 15.09 7.42 1.02 4.35 3.58 7.67 6.65 8.7 4.86 1.28 5.37.26 5.37-12.28v-13.81l-14.07-6.4c-21.74-9.98-29.67-27.37-20.46-45.28 4.61-8.7 17.65-17.65 26.35-17.65 3.84 0 5.63-1.54 5.63-5.12 0-3.84 1.79-5.12 6.4-5.12s6.39 1.29 6.39 5.12z" />
                            <path d="M707.19 115.42c-2.81 2.81-2.05 12.53 1.28 15.86 5.37 5.37 7.42 3.33 6.65-6.4-.76-8.95-4.35-13.04-7.93-9.46zM725.87 177.84c0 7.42 1.02 10.23 3.84 10.23 5.12 0 7.67-11.77 3.84-16.63-5.38-6.39-7.68-4.35-7.68 6.4zM465.7 237.96c-26.86 5.88-48.35 18.16-70.09 39.65-29.93 29.67-43.23 60.37-43.74 101.3-.25 41.7 13.3 75.47 42.47 104.63 29.15 29.16 60.62 42.21 102.57 42.21 43.23 0 72.65-12.28 103.61-43.49 50.14-50.14 57.3-123.56 17.65-182.91-33.51-49.88-93.63-74.19-152.47-61.39zm37.61 75.2c0 3.58 2.56 5.12 9.72 6.4 11.77 1.79 22.77 12.53 25.07 24.05l1.79 8.19h-13.05c-10.49 0-13.3-1.02-14.58-4.86-.77-2.81-3.07-5.63-5.12-6.4-3.07-1.02-3.84 1.28-3.84 10.74v12.28l14.07 6.91c22.77 11 30.44 31.21 19.44 49.37-5.12 8.19-18.93 16.37-28.14 16.37-4.35 0-5.37 1.54-5.37 8.95 0 7.16-1.02 8.95-5.12 8.95-4.09 0-5.12-1.79-5.12-8.95 0-8.44-.51-8.95-7.93-8.95-16.12 0-29.16-13.05-30.95-30.7-.77-5.88 0-6.4 11.51-7.16 11.26-.77 12.28-.26 14.84 6.4 2.56 6.65 6.4 11 10.74 11 1.02 0 1.79-6.14 1.79-13.81v-13.56l-11-4.35c-34.28-13.05-36.58-52.44-3.84-62.93 7.16-2.3 12.53-5.63 13.3-8.44 1.56-6.15 11.79-5.89 11.79.5z" />
                            <path d="M486.17 340.79c-6.4 2.56-2.3 18.67 4.86 18.67 1.02 0 2.05-4.6 2.05-10.23 0-10.23-.77-11-6.91-8.44zM503.31 404.23c0 11 .25 11.51 5.12 8.95 5.63-3.07 6.91-12.53 2.05-17.39-5.38-5.37-7.17-3.32-7.17 8.44zM30.05 754.7v223.84h301.86v-35.81c0-33.77.26-35.81 4.86-35.81 11.77 0 46.81 13.56 69.33 27.12 47.58 28.14 77.51 40.16 123.56 49.88 31.72 6.91 94.65 8.19 124.58 2.56 46.3-8.18 101.56-31.72 135.58-57.3 23.54-17.91 94.91-86.47 132.26-127.14 40.67-44 47.84-57.56 47.84-89.28.25-19.44-.77-24.04-7.93-39.14-13.56-28.65-36.33-46.56-67.79-52.95-33.77-7.16-60.37 6.91-115.37 60.88-27.37 26.86-33.26 31.47-35.3 27.88-5.63-9.98-23.28-30.19-35.81-40.93-49.13-41.45-117.43-67.8-221.04-84.43-13.05-2.05-45.02-3.33-87.74-3.33h-67.02v-49.89H30.05V754.7zm439.49-123.81c51.93 5.63 107.19 20.98 147.61 41.19 40.42 20.46 80.58 53.46 84.67 69.84 2.81 11-.51 28.39-6.65 37.09-6.91 9.46-23.02 17.65-35.3 17.91-14.84 0-46.3-7.67-84.68-20.98-20.46-6.91-39.65-13.3-42.46-14.07-4.35-1.03-6.39 2.04-13.3 20.98-4.6 12.28-7.93 23.28-7.16 24.3 2.56 4.35 95.68 33 119.98 37.09 54.23 8.95 90.81-7.42 112.81-50.65 14.58-28.65 49.63-68.3 86.72-97.98 26.35-21.23 39.91-27.37 53.21-25.32 18.67 3.32 35.3 23.53 35.3 42.72-.26 17.91-8.19 27.37-87.23 105.65-74.19 73.16-78.79 77.51-100.79 88.77-90.82 46.56-199.28 42.72-285.75-10.23-36.07-22.26-71.37-36.07-101.05-40.16l-13.56-1.79v-221.8l14.84-1.53c7.93-.77 16.37-2.05 18.42-2.3 9.46-2.06 81.86-1.29 104.37 1.27z" />            
                        </>;      
            case 'Efc':
                return  <>  <path d="M26.33 89.22c-4.7 2.25-8.78 6.74-11.64 12.66l-4.7 8.98V568.4l6.12-10.62c3.49-5.92 12.26-18.58 19.41-28.18l13.27-17.35V328.3c0-205.39-1.02-190.9 14.29-200.49l7.15-4.49 427.52-.61c425.69-.41 427.53-.41 435.9 3.67 4.7 2.25 10.21 6.74 12.45 9.8 4.08 5.51 4.08 9.19 4.7 214.78.41 147.41-.2 210.9-1.84 214.58-3.27 8.17-12.05 15.52-21.23 17.97-5.72 1.63-76.36 2.24-228.87 2.24H478.15l6.13 18.38 6.33 18.37h237.45c232.14 0 237.85 0 245.41-4.08 5.51-2.65 9.39-6.74 12.25-12.86 4.29-8.78 4.29-8.98 4.29-251.74V110.86l-4.7-8.98c-2.65-5.51-7.15-10.21-11.64-12.66-6.74-3.47-26.13-3.67-473.67-3.67-439.98-.01-466.93.2-473.67 3.67z" />
                            <path d="M177.83 154.35c-2.45 2.04-6.33 9.6-8.58 16.95-11.23 34.1-39.4 61.86-75.13 73.7-6.94 2.25-14.09 6.13-15.72 8.57-4.7 6.53-4.49 194.37 0 200.9 1.84 2.65 7.96 5.92 14.5 7.76l11.43 3.27 22.87-11.23c22.66-11.23 48.59-20.01 67.58-22.66 5.72-.82 11.02-2.04 11.84-2.45.82-.61-3.06-3.27-8.57-5.92-13.9-6.95-31.45-26.34-36.76-40.64-6.33-16.95-7.35-30.63-3.47-45.94 6.53-24.91 21.23-42.88 44.1-53.9 11.84-5.51 15.31-6.33 31.85-6.33 17.15 0 19.4.41 33.89 7.76 23.48 11.43 37.16 29.2 42.67 54.92 6.94 32.26-10.82 68.8-40.83 83.91l-10 4.9 17.15 2.45c39.4 5.51 83.1 23.68 115.15 47.77 21.85 16.54 47.16 42.88 61.05 63.29l10.62 15.72h177.22c202.94 0 182.52 2.25 189.87-20.62 10.82-33.48 38.18-60.84 73.5-73.09 11.23-4.08 16.13-6.94 17.97-10.62 2.04-3.67 2.65-28.58 2.65-99.84 0-107.8 1.02-101.47-16.95-107.19-18.58-6.13-34.71-15.92-48.39-29.6-15.31-15.11-22.25-26.34-28.58-44.92-2.45-7.35-5.92-14.9-7.55-16.95-3.06-3.27-21.03-3.47-322.17-3.47-300.96.03-319.34.23-323.21 3.5zm351.77 39.6c47.37 15.11 83.91 71.05 90.86 139.24 3.88 39.2-3.06 77.79-20.62 113.52-13.88 28.18-35.32 50.63-59.82 62.68-16.13 7.76-16.54 7.96-39.81 7.96-22.87 0-24.09-.2-39-7.35-34.3-16.33-61.25-51.25-74.32-96.16-29.2-100.86 21.44-213.35 100.65-223.97 14.91-1.84 26.96-.81 42.06 4.08zm269.71 89.63c50.63 24.91 60.43 89.22 19.19 127.2-39.2 36.34-100.25 24.3-122.91-24.3-19.8-42.26 1.84-92.08 46.35-106.98 18.17-6.12 40.01-4.49 57.37 4.08z" />
                            <path d="M491.22 219.88c-2.25 2.45-3.47 7.35-3.47 14.29 0 9.8-.41 10.62-5.51 11.84-23.27 5.1-39.4 15.92-48.18 32.26-3.68 6.94-4.49 11.64-4.49 27.77 0 17.56.61 20.42 5.51 28.99 7.96 13.27 18.38 21.23 36.75 27.77l15.92 5.51v27.97c0 15.92-.82 28.17-1.84 28.17-4.7 0-14.7-13.27-17.97-23.68-6.53-21.03-23.68-27.97-37.77-15.31-6.13 5.31-6.74 7.15-6.74 16.95.41 25.72 22.25 49.82 52.06 57.37l11.23 2.86 1.02 11.84c1.23 11.84 4.9 17.35 12.25 17.35s11.03-5.51 12.25-17.35l1.02-11.84 11.03-2.86c14.29-3.47 29.81-12.05 36.34-20.01 12.86-15.11 18.99-37.97 14.9-56.76-4.49-22.46-20.01-37.77-46.55-46.55-7.55-2.45-14.5-5.1-15.31-5.92-.82-.61-1.23-12.25-1.02-25.32l.61-24.09 5.51 4.29c3.06 2.45 6.94 8.78 8.78 14.7 5.31 15.92 18.17 22.05 31.65 15.11 12.25-6.33 14.09-21.03 4.7-37.98-9.39-17.35-22.25-25.93-45.94-31.24-5.31-1.23-5.72-2.04-5.72-12.25 0-7.96-1.02-11.64-3.67-14.09-4.9-4.48-13.27-4.28-17.35.21zm-3.47 82.08c0 11.23-.82 20.42-1.84 20.42s-4.7-2.45-8.17-5.31c-5.51-4.49-6.33-6.53-6.33-15.11 0-8.58.82-10.62 6.33-15.11 3.47-2.86 7.15-5.31 8.17-5.31s1.84 9.19 1.84 20.42zm34.71 78.6c11.43 5.92 15.72 19.6 9.6 31.65-2.45 4.7-14.5 14.29-17.97 14.29-1.02 0-1.84-11.02-1.84-24.5 0-15.72.82-24.5 2.04-24.5 1.23 0 4.9 1.43 8.17 3.06zM746.02 311.56c-16.33 8.57-25.93 23.68-26.13 41.24-.21 36.55 35.73 58.39 68.19 41.45 32.67-16.95 32.05-65.95-.82-81.87-10.82-5.32-32.05-5.73-41.24-.82zM212.53 312.37c-32.87 16.33-33.28 64.92-.61 81.87 32.05 16.74 67.78-4.29 67.78-40.02 0-19.19-9.39-34.71-25.73-42.26-11.42-5.31-30.21-5.1-41.44.41zM217.84 457.33c-79.01 6.94-149.65 56.14-184.16 128.62-73.3 152.92 37.36 328.5 207.02 328.5 87.38 0 169.05-52.06 206.21-131.28 53.49-113.93 5.92-248.67-106.98-303.6-22.66-11.02-52.27-19.8-72.68-21.44-27.97-2.43-32.05-2.43-49.41-.8zm34.51 35.32c5.1 4.29 5.72 6.53 6.33 20.21l.82 15.31 14.7 3.47c19.6 4.7 32.05 11.84 45.12 25.93 26.34 28.38 29.4 57.78 7.15 72.48-11.64 7.96-29.81 5.72-39.4-4.9-1.84-2.25-5.72-9.8-8.58-16.95-5.1-13.27-9.39-19.4-15.72-22.66-3.47-1.84-3.67.2-3.67 32.46v34.5l15.92 4.7c50.23 14.7 75.95 44.71 75.95 88.61 0 46.34-32.67 84.93-79.01 93.51l-12.86 2.45v12.86c0 19.6-6.33 29.2-19.4 29.2s-19.4-9.6-19.4-29.2v-12.86l-12.66-2.66c-42.06-8.57-76.15-44.1-78.6-81.46-.82-11.84-.41-14.5 3.88-20.62 7.96-11.84 14.7-15.52 28.17-15.52 18.58 0 24.91 6.33 34.91 34.3 4.29 11.84 13.27 24.3 20.42 28.17 3.67 1.84 3.88.41 3.88-37.56v-39.61l-13.68-4.7c-33.07-11.03-53.29-26.54-63.5-48.59-4.29-9.39-5.51-15.52-6.13-31.44-2.25-50.43 23.48-81.05 77.38-92.28 5.31-1.22 5.51-1.84 6.33-16.33.61-12.66 1.43-16.13 5.51-20.42 6.74-7.14 18.17-7.14 26.14-.4z" />
                            <path d="M211.1 587.59c-17.56 11.84-16.95 38.79 1.23 48.39 3.47 1.64 6.74 2.86 7.15 2.25.61-.41.61-13.27.41-28.58l-.61-27.56-8.18 5.5zM259.08 753.17c0 22.87.82 34.71 2.04 34.71 4.49 0 13.88-6.13 19.19-12.25 7.15-8.58 10-20.01 7.55-30.63-2.25-10.41-6.74-15.31-18.99-21.64l-9.8-4.9v34.71z" />            
                        </>
                ;   
            default:
              return 'No icono';
          }
      }

    return (
        <svg {...props} x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
            {tipoIcono(props.titulo)}
        </svg>
    );
}
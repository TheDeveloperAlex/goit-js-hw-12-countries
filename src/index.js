import './styles.css';
import { fetchCountries } from './fetchCountries';
import cardTpl from './tpl/card.handlebars';
import listTpl from './tpl/list.handlebars';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, PNotify} from '@pnotify/core';
import { error, Stack} from '@pnotify/core';


const debounce = require('lodash.debounce');

const inputNode = document.querySelector('#input');
inputNode.addEventListener(
    'input',
    debounce(() => {
        //  console.log(input.value);
        fetchCountries(input.value).then((data) => {
            console.log(data);
            console.log(input.value);
            // if (input.value === '') {
            //     console.log("good");
            //     const headerEl = document.querySelector('h1');
            //     const divEl = document.querySelector('.description');
            //     const ulEl = document.querySelector('#id');
            //     headerEl.remove();
            //     divEl.remove();
            //     ulEl.remove();
                

            // }
            if (data.length > 10) {
               
                //  PNotify.eror({
                //     title: 'Regular Notice',
                //     text: 'Check me out! I\'m a notice.'
                // });
                error({
                        text: "Too many matches found. Please enter a more specific query!",
                        stack: new Stack({
                            dir1: 'down', dir2: 'right', // Position from the top left corner.
                            firstpos1: 90, firstpos2: 90 // 90px from the top, 90px from the left.
                        })
                        });
                        
                        
                // error({
                //     text: 'Notice 1.',
                //     stack: new PNotify.Stack({ dir1: 'down', firstpos1: 25 })
                // });
                // PNotify.notice({
                //     text: 'Notice 1.',
                //     stack: new PNotify.Stack({ dir1: 'down', firstpos1: 25 })
                // });
                // PNotify.notice({
                //     text: 'Notice 2.',
                //     stack: new PNotify.Stack({ dir1: 'down', firstpos1: 25 })
                // });
            }
            if (10 >= data.length && data.length >= 2) {
                document.querySelector('#card').innerHTML = listTpl(data);
                // close();
                // console.log(data);
            }
            if (data.length === 1) {
                
                document.querySelector('#card').innerHTML = cardTpl(data[0])
            }
            if (data.status === 404) {
                error({
                        text: "Incorect text. Try again!",
                        stack: new Stack({
                            dir1: 'down', dir2: 'right', // Position from the top left corner.
                            firstpos1: 90, firstpos2: 90 // 90px from the top, 90px from the left.
                        })
                        });
            }
            console.log(data.status);
        });
    }, 500)
    
);



    

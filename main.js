// Föll sem stýra útliti/búa til element

/**
 * Fjarlægir öll element sem eru innan gefins element.
 * @param {element} element Element sem á að tæma.
 */
 export function emptyElement(element) {
    while (element.firstElementChild) {
      element.firstElementChild.remove();
    }
  }
  
  /**
   * Birta skjá og fela aðra.
   * @param {string} screen Annað hvort `main` eða `waiting` eftir því hvort á að birta.
   */
  export function showScreen(screen) {
    const main= document.querySelector('.game__main');
    const waiting= document.querySelector('.game__waiting');

    main.classList.add('game__main--hidden')
    waiting.classList.add('game__waiting--hidden')

    switch (screen) {
        case 'main':
            main.classList.remove('game__main')
            break;
            case 'waiting':
                waiting.classList.remove('game__waiting--hidden')
                break;
                default:
    }
  }
  
  /**
   * Býr til DOM element fyrir bolla og skilar því.
   *
   * @param {number} num Fjöldi bolla sem á að búa til.
   * @param {element} svg SVG element fyrir mynd af bolla.
   * @param {function} onClick Fall sem keyrir þegar smellt er á bolla.
   * @returns Elementi fyrir bolla.
   */
  export function createCup(num, svg, onClick) {
    // TODO útfæra
  }

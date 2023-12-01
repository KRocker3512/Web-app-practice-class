import React, { useEffect } from 'react';

const App = () => {
  const buttons = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

  const handleButtonClick = (key) => {
    makeSound(key);
    buttonAnimation(key);
  };
  
  useEffect(() => {
    buttons.forEach((key) => {
      const button = document.querySelector(`.${key}`);
      button.addEventListener('click', () => handleButtonClick(key));
    });

    document.addEventListener("keypress", function(event) {

        makeSound(event.key);
      
        buttonAnimation(event.key);
      
      });

    return () => {
      buttons.forEach((key) => {
        const button = document.querySelector(`.${key}`);
        button.removeEventListener('click', () => handleButtonClick(key));
      });

      document.addEventListener("keypress", function(event) {

        makeSound(event.key);
      
        buttonAnimation(event.key);
      
      });
    };
  }, []);

  const makeSound = (key) => {
    switch (key) {
      case "w":
        import('./sounds/tom-1.mp3').then((module) => {
          const tom1 = new Audio(module.default);
          tom1.play();
        });
        break;
  
      case "a":
        import('./sounds/tom-2.mp3').then((module) => {
          const tom2 = new Audio(module.default);
          tom2.play();
        });
        break;
  
      case "s":
        import('./sounds/tom-3.mp3').then((module) => {
          const tom3 = new Audio(module.default);
          tom3.play();
        });
        break;
  
      case "d":
        import('./sounds/tom-4.mp3').then((module) => {
          const tom4 = new Audio(module.default);
          tom4.play();
        });
        break;
  
      case "j":
        import('./sounds/snare.mp3').then((module) => {
          const snare = new Audio(module.default);
          snare.play();
        });
        break;
  
      case "k":
        import('./sounds/crash.mp3').then((module) => {
          const crash = new Audio(module.default);
          crash.play();
        });
        break;
  
      case "l":
        import('./sounds/kick-bass.mp3').then((module) => {
          const kick = new Audio(module.default);
          kick.play();
        });
        break;
  
      default:
        console.log(key);
    }
  };
  

  const buttonAnimation = (currentKey) => {
    const activeButton = document.querySelector(`.${currentKey}`);

    activeButton.classList.add('pressed');

    setTimeout(() => {
      activeButton.classList.remove('pressed');
    }, 100);
  };

  return (
    <div>
      <h1 id="title">Drum 🥁 Kit</h1>
      <div className="set">
        {buttons.map((key) => (
          <button key={key} className={`drum ${key}`} onClick={() => handleButtonClick(key)}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;

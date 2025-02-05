# Modal

Le composant "Modal" est une fenêtre modale, réutilisable, 
qui affiche un message et un bouton pour fermer la modale

## Utilisation

Pour utiliser le composant "Modal",
importer le composant et l'inclure dans votre composant parent.
Deux props sont nécessaires :
"isOpen" et "onClose"

"isOpen" est un booléen qui détermine si la modale est visible ou cachée
"onClose" est une fonction appelée lorsque l'utilisateur clique sur le bouton de fermeture

Le composant utilise les styles définis dans Modal.css,
importer ce fichier dans votre projet pour que la modale soit correctement stylisée

### Exemple

```jsx

import {useState} from "react";
import Modal from './Modal';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Submit</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    );
};

export default App;
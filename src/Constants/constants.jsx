import FlashcardImage from '../Images/Flashcard.png'
import MostWantedImage from '../Images/Most-Wanted.png'
import TrashCollectorImage from '../Images/trash-collector.png'
import YoutubeCloneImage from '../Images/Youtube-Clone.png'
import NorthcottImage from '../Images/Northcott.png'

    const projects = [
    {
        id: 0,
        title: 'Most-Wanted',
        description: 'A project that can be used to search for "prisoners" within a data set. This project was built using Javascript, HTML, and CSS',
        image: MostWantedImage,
        source: 'https://github.com/CyrusWarner/Most-Wanted',
    },
    {
        id: 1,
        title: 'Flashcards',
        description: 'A project using React for the Front-End and Django for the Back-End. Allows a user to create a collection and add flashcards for projects with a variety of animations and features',
        image: FlashcardImage,
        source: 'https://github.com/CyrusWarner/Flashcard-Frontend',
    },
    {
        id: 2,
        title: 'Trash-Collector',
        description: 'A project built using Django for the Front-End and Back-End. Allows a user to register as an employee or register as a customer and allows for users to schedule pickups and pay using the Paypal API and allows users to confirm pickups ',
        image: TrashCollectorImage,
        source: 'https://github.com/Jamesburgess44/Trashcollector',
    },
    {
        id: 3,
        title: 'Youtube-Clone',
        description: 'A project built using React for the Front-End and Django for the Back-End. Allows a user to add comments, replies, and search for videos',
        image: YoutubeCloneImage,
        source: 'https://github.com/carter-willey/Youtube-Clone-Frontend',
    },
    {
        id: 3,
        title: 'Northcott Neighborhood House',
        description: 'This is a website that I helped design multiple pages on. Personally I developed the Juneteenth and Covid Vaccine pages of this website',
        image: NorthcottImage,
        source: 'https://northcotthouse.org/juneteenth-2021/',
    }
]

export default projects
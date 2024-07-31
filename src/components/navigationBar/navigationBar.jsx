import "./NavigationBar.css";
// Navigation Bar component
export const NavigationBar = ({ onPageChange, currentPage }) => {

    // Handle Click Function
    const handleClick = (buttonClicked) => {
        onPageChange(buttonClicked);
        console.log(buttonClicked);
    };

    return (
        <div>
            <h2>{currentPage}</h2>
            <div className="navigationBar">
                <div className="navigationButton" onClick={() => handleClick('main')}>
                    <span className={currentPage === 'main' ? 'current' : ''}>
                        Main
                    </span>
                </div>

                <div className="navigationButton" onClick={() => handleClick('goalpage')}>
                    <span className={currentPage === 'goalpage' ? 'current' : ''}>
                        Goal
                    </span>
                </div>

                <div className="navigationButton" onClick={() => handleClick('journalpage')}>
                    <span className={currentPage === 'journalpage' ? 'current' : ''}>
                        Journal
                    </span>
                </div>

                <div className="navigationButton" onClick={() => handleClick('progresspage')}>
                    <span className={currentPage === 'progresspage' ? 'current' : ''}>
                        Progress
                    </span>
                </div>
            </div>
        </div>
    );
};

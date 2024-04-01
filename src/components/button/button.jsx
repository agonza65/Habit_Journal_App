// New Button Component
export const Button = ({children,onSelect}) => {

    return (
        <button onClick={onSelect}> {children}</button>
    );
}
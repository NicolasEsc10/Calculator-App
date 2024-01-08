// eslint-disable-next-line react/prop-types
export const Button = ({ isReset, isDelete, isResult, onClick, children }) => {

    const handleClick = () => {
        if (isDelete) {
            onClick('delete');
        } else if (isResult) {
            onClick('result');
        } else {
            onClick(children);
        }
    };


    return (
        <div
            className={`btn button_style ${isReset ? 'reset' : isDelete ? 'delete' : isResult ? 'result' : ''}`.trimEnd()}
            onClick={handleClick}>
            {children}
        </div>
    )
}

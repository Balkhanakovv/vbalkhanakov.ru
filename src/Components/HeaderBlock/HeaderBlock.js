import './HeaderBlockStyle.css'

function HeaderBlock(props) {
    return (
        <div className="headerBlock" style={props.style}>
            <img src={props.header_img} width="500px" alt="header gif" />
            <div>
                <h1>{props.h1}</h1>
                {
                    props.p.map((ps, i) => {
                        return(<p key={i}>{ps}</p>);
                    })
                }
            </div>
        </div>
    )
}

export default HeaderBlock;
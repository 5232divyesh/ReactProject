import './Content.css'
export default function Content(prop) {
    // const {image} = prop
    return (
        <div className="content">
                <div className="card">
                <img src={prop.src} alt="Product Image" class="card-img"></img>
                    <div className="card-content">
                        <h2 className="card-title">{prop.Name}</h2>
                        <p className="card-description">{prop.Description}</p>
                        <div className="card-price">{prop.price}</div>
                        <button className="card-button">Buy Now</button>
                    </div>
                </div>
        </div>
    )
}

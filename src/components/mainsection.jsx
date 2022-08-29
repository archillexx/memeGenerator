const Mainsection = ()=>{
    return(
        <section className="main__container">
            <div className="input__container">
                <form>
                    <input className="input" placeholder="Enter first line"></input>
                    <input className="input" placeholder="Enter second line"></input>
                    <div>
                    <button className="submit__btn">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Mainsection
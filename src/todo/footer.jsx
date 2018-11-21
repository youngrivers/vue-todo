import '../assets/styles/footer.styl'

export default{
    data(){
        return {
            author:'young_river'
        }
    },
    render(){
        return(
            <div id="footer">
                <span>© {this.author}@outlook.com</span>
            </div>
        )
    }
}
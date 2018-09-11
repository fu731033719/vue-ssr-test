// import className from '../assets/styles/footer.styl'
import '../assets/styles/footer.styl'
export default {
  data () {
    return {
      author: 'Danytdlemon1900'
    }
  },
  render () {
    return (
      // <div id={className.footer}>
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}

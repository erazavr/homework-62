import React, {Component} from 'react';
import images from "../images";

class Content extends Component{
    render() {
        return(
            <div className="container">
                <div className="article">
                    <h2 className="our-services">our services <span>Blazrobar.com</span></h2>
                    <p><img src={images.photo1} className="rightimg"/>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Eligendi quis ex officiis minima accusamus nostrum nobis a debitis
                        exercitationem accusantium provident et, eius, adipisci modi quos repudiandae labore ullam.
                        Nesciunt reprehenderit quia ipsa libero autem, ducimus amet. Eaque atque rem officiis tenetur
                        assumenda quibusdam harum excepturi eos. <br/>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ullam quisquam harum, qui voluptate nostrum aperiam, fuga cupiditate incidunt beatae
                            quae itaque? Rem, necessitatibus temporibus, totam modi natus nesciunt, tempora veritatis
                            facilis, ipsum assumenda quibusdam. Expedita vel fugit magnam cupiditate placeat, culpa
                            temporibus natus alias sint. Possimus temporibus laborum provident totam porro cumque
                            cupiditate quas maiores itaque nobis, enim, fuga eveniet illum ex deserunt expedita
                            ullam. Dolore delectus esse sunt magnam, ipsum veniam vero. Debitis repellendus harum
                        cumque quae, maxime suscipit voluptate voluptas. Error earum cumque eum tempora.Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Ullam quisquam harum, qui voluptate nostrum
                        aperiam, fuga cupiditate incidunt beatae quae itaque? Eligendi quis ex officiis minima accusamus
                        nostrum nobis a debitis exercitationem accusantium provident et, eius, adipisci modi quos
                        repudiandae labore ullam.</p>

                </div>
                <div className="article-2">
                    <h2 className="Shoe-house">Unique Design <span>Shoe house</span></h2>
                    <p><img src={images.photo2} className="img leftimg"/>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Possimus quod alias exercitationem rem, magni, aut quas itaque
                        mollitia porro iure architecto maxime quibusdam cumque. Nisi magnam error voluptates alias
                        corporis. Earum dolor quisquam, aperiam. Temporibus minima magnam eius consequuntur incidunt
                        sunt alias facilis. Placeat, eum! A delectus, iusto, itaque impedit voluptates iure sed minus
                        officia pariatur incidunt quae veritatis libero.Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Perspiciatis temporibus ea quos delectus sit neque repellat nisi
                            dignissimos nostrum ab asperiores aliquam laborum doloribus officiis quia aliquid commodi
                            quas, ex fugiat sed maxime veritatis saepe nesciunt. Facilis officiis natus temporibus
                            obcaecati, perspiciatis possimus voluptatem cumque est quidem perferendis corrupti culpa qui
                            magni quod accusantium earum ex consectetur adipisci harum veritatis consequatur, ab fugiat!
                            Incidunt iusto non magni ex sunt, ducimus voluptate perferendis accusantium rerum at quo
                            dolore nihil error laboriosam modi officia itaque porro temporibus neque vel!<br/> Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Quas, deserunt, doloribus temporibus
                        architecto error distinctio ipsa. Quasi libero non assumenda porro dolore obcaecati nam voluptas
                        alias consectetur esse, amet itaque reprehenderit repudiandae incidunt, eum at quisquam
                        praesentium minus soluta omnis.</p>
                    <div className="txt-height">
                        <p><img src={images.photo3} className="img leftimg-2"/>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Dignissimos eligendi velit rem molestias corporis. Earum,
                            expedita omnis reiciendis pariatur neque eos dolorum deserunt, tempore ea, consequuntur
                            officia. Quas debitis dolor iure magni accusantium, deleniti nemo modi, error cumque
                            assumenda totam repellendus, repudiandae fuga nostrum! Doloribus, iusto fugit velit culpa
                            hic.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facere quaerat
                        illum perferendis sapiente ad laborum reiciendis. Deserunt repellat, illo voluptatibus, quis
                        quod temporibus sapiente blanditiis, sunt sint ea laudantium porro cumque quia, quibusdam at.
                        Fuga officiis assumenda nemo vero quae numquam, repellendus cumque earum dolorem accusantium
                        perspiciatis molestias excepturi, provident pariatur quasi, ducimus deleniti!</p>
                    </div>


                </div>
            </div>
        )
    }
}
export default Content
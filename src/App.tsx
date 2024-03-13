import './App.scss';
import { Arrow } from './assets/arrow';
import { Logo } from './assets/logo';
import TikTokPhone1 from './assets/el iphone.png'
import { ArrowBlack } from './assets/arrowblack';

function App() {
  return (
    <><><><><><><><section className='section1'>
      <header className='header-container'>
        <Logo />
        <nav className='menu-options'>
          <a>What we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <button>
          <div className='button-front'>
            Contact us
            <Arrow />
          </div>
          <div className='button-back'>
            Contact us
            <Arrow />
          </div>
        </button>
      </header>
      <div className='content-container'>
        <div className='h1-and-p-and-button'>
          <h1>Influencer-led<br />
            Social Media<br />
            Agency</h1>
          <p>Reach your target audience in a genuine way<br />
            through paid and organic growth on <b>TikTok,<br />
              Instagram, Youtube, Pinterest</b> and more by a<br />
            team of content creator with a proven track<br />
            record.</p>
          <button>
            <div className='button-front2'>
              Work with us
              <Arrow />
            </div>
            <div className='button-back2'>
              Work with us
              <Arrow />
            </div>
          </button>
        </div>
        <div className='thegirl'>
          <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/640e177a346b3466d52f1c92_Final_ILL_FinalRGB.svg" loading="lazy" alt="thegirl" width="528" />
        </div>
        {/* <div className="bubble target">
<img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a9967765985b4ada30_direct-hit.png" loading="lazy" alt=""/>
</div>
<div className="bubble bag">
<img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a8a7449241d438c9b9_shopping-bags.png" loading="lazy" alt=""/>
</div>
<div className="bubble fire">
<img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1807dd0496a3408c33ef6_fire.png" loading="lazy" alt=""/>
</div>
<div className="bubble storm">
<img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a866d33a81bbe2532b_cloud-with-lightning.png" loading="lazy" alt=""/>
</div>
<div className="bubble rocket">
<img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a871aadbac60940662_rocket.png" loading="lazy" alt=""/>
</div>
<div className="bubble party">
<img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a871aadb6252940663_party-popper.png" loading="lazy" alt=""/>
</div>
I was gonna use them but in my opinion they don't look good
on the page. But i'm gonna leave the div's here anyway in case
you want to use them and adjust them yourself.*/}
      </div>
    </section>
      <section className='section2'>
        <h1>Trusted by</h1>
        <div className='walmart-row'>
          <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d3df6fb38a3f51302d5d00_walmart.svg" loading="lazy" id="w-node-_25f2f0ec-e43f-c8e3-e252-60b7531f3e05-531f3e01" />
          <img className='grow-therapy' src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d145151f7d3b68b8eca4f0_grow-therapy.svg" loading="lazy" id="w-node-_25f2f0ec-e43f-c8e3-e252-60b7531f3e07-531f3e01" />
          <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d14515ec1e97a2f6bcd98f_nordstrom.svg" loading="lazy" id="w-node-_25f2f0ec-e43f-c8e3-e252-60b7531f3e09-531f3e01" />
        </div>
        <div className='avene-row'>
          <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1451541b400081fe498e8_avene.svg" loading="lazy" id="w-node-_25f2f0ec-e43f-c8e3-e252-60b7531f3e14-531f3e01" />
          <img className='popflex' src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1451462b7fa42bf6ddf01_popflex.svg" loading="lazy" id="w-node-_25f2f0ec-e43f-c8e3-e252-60b7531f3e16-531f3e01" />
          <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1451532a91de6811b67cb_sweet-sweat.svg" loading="lazy" id="w-node-_25f2f0ec-e43f-c8e3-e252-60b7531f3e18-531f3e01" />
        </div>
      </section></>
      <section className='section3'>
        <div className='success'>
          <h2>Our <span>success</span> speaks for
            itself 👀</h2>
          <p>It's time you trust someone with your
            socials that knows how to do it for
            themselves. Summer, owner of Summerly
            Media, started it all with her personal
            socials and now helps hundreds of
            companies do the same.</p>
        </div>
        <img className='summerttk' src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1466b88b7bd5e4d4df7c3_About_Phone_1.png" width="375px" height="765" />
        <img className="infottk" src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d14878c75ced415efa1022_About_image_2.png" width="375px" height="272" />
      </section></>
      <section className='section4'>
        <div className='TikTokPhone1'>
          <img src={TikTokPhone1}/>
        </div>
        <div className='whatwedo'>
          <h2>What <span>we do</span></h2>
          <p>Whether you're just starting out or put millions into marketing, we can help you use social media to meet your goals. With our genuine and consumer-based approach, we can take your app, product, service, or personal page to the eyes of real people through organic and paid social media marketing.</p>
        </div>
      </section></>
      <section className='section5'>
          <div className='organically'>
            <h2>What we've done organically</h2><img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d150689465fa1d9fc58c9b_seedling.png"/>
          </div>
          <div className='organicallyrow'>
            <div className='c167'>
              <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1807dd0496a3408c33ef6_fire.png"/>
              <h2>167M+</h2>
              <p>views and counting</p>
            </div>
            <div className='figure6'>
              <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1817103a283fad7f2c9b8_money-bag.png"/>
              <h2>6 figures</h2>
              <p>of sales made</p>            
            </div>
            <div className='gained'>
              <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1817199200fbcabd3b1bc_chart-increasing.png"/>
              <h2>1.9M+</h2>
              <p>followers gained</p>                 
            </div>
          </div>
        <div className='paid-ads'>
            <h2>What we've done through paid ads</h2><img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a871aadbac60940662_rocket.png"/>
        </div> 
          <div className='moneyrow'>
            <div className='views630'>
              <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a871aadb6252940663_party-popper.png"/>
              <h2>630M+</h2>
              <p>views and counting</p>
            </div>
            <div className='sales'>
              <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1817103a283fad7f2c9b8_money-bag.png"/>
              <h2>1.2 million</h2>
              <p>in sales</p>
            </div>
            <div className='booked1800'>
              <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1817199200fbcabd3b1bc_chart-increasing.png"/>
              <h2>1800+</h2>
              <p>booked calls for clients</p>
            </div>
          </div> 
      </section></>
      <section className='section6'>
        <div className='section6title'>
            <h2>What we offer</h2><img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d15425f32a01025370a9bd_palms-up-together.png"/>
        </div>
        <div className='whole-offer-row'>
          <div className='offer-row'>
            <div>
              <h2>Full strategy<br/>
              + content ideas</h2>
              <p>After learning your goals, target audience and problems you solve, we create a short-term and long-term strategy that aligns with your brand. Once we build out a tailored content roadmap, we then create specific ideas for your approval which include: on-screen copy, detailed shot-lists, captions and optimized hashtags.</p>
            </div>
            <div>
              <h2>Content creation<br/>
              +video editing</h2>
              <p>We'll bring your ideas to life with attention-grabbing visuals and clean edits that engage your audience. Whether our team is filming or editing your footage, we'll make sure it's top-notch.</p>
            </div>
            <div>
              <h2>Community<br/>
              engagement</h2>
              <p>Don't stress over comments - our team will handle it. We'll make sure to keep and grow an engaged audience, always responding in a way that represents your brand's voice.</p>
            </div>
            <div>
              <h2>Graphic design<br/> 
              + IG Planning</h2>
              <p>Our team can create visually stunning graphics, UGC-style photos and professional photography that align with your brand identity. We'll make sure your brand stands out on platforms like Instagram and Pinterest with a cohesive, aesthetic and value-driven feed.</p>
            </div>
            <div>
              <h2>Multi-platform posting<br/> 
              + management</h2>
              <p>We'll take the hassle out of managing multiple social media accounts while you focus on running your business. Leave the scheduling, publishing, and optimization to us across platforms such as TikTok, Instagram, YouTube, and Pinterest.</p>
            </div>
            <div>
              <h2>Monthly analytics<br/>
              + reporting</h2>
              <p>No more guesswork. Our team will provide you with a detailed monthly report on the performance of your content so you stay informed while we use this to learn and refine our strategy.</p>
            </div>
          </div>
        </div>
      </section></>
      <section className='section7'>
        <h1>Let us do the heavy<br/>
        lifting for you</h1>
        <p>Focus on what you do best and let<br/>
        us experts do the rest</p>
        <button>
          <div className='button-front'>
            Work with us<ArrowBlack />
          </div>
          <div className='button-back'>
            Work with us<Arrow />
          </div>
        </button>
      </section></>
      <section className='section8'>
          <div>
            <h2>Made by Rodrygo Freitas</h2>
            <p>Website made for educational purposes</p>
          </div>
      </section></>
  )
}

export default App;
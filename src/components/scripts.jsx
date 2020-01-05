import React from 'react'

const Scripts = () => (
  <>
    {/* <!-- <script src="https://code.jquery.com/jquery-2.2.3.min.js" integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossorigin="anonymous"></script> --> */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-2195173-7"></script>
    <script dangerouslySetInnerHTML={{__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-2195173-7');`}}>
    </script>
    <script dangerouslySetInnerHTML={{__html: `
      $(document).ready(function(){
        $('.modal-trigger').leanModal();
      });`}}>
    </script>
    <script dangerouslySetInnerHTML={{__html: `
      $(document).ready(function() {
        var pastHashes = [
          '2018-11-13-warriorjs-arena',
          '2018-10-09-performance-of-images-and-video-delivery',
          '2018-09-11-building-bots-with-the-web-speech-api',
          '2018-08-14-node-application-performance',
          '2018-07-10-warriorjs-arena',
          '2018-06-12-saving-the-world-with-json-schema',
          '2018-05-08-lightning-talks',
          '2018-03-13-why-would-i-ever-elm',
          '2018-02-13-umbraco-cms-+-lean-coffee-+-cool-wall',
          '2017-11-14-node-js-in-the-aws-cloud',
          '2017-10-10-being-asynchronous',
          '2017-08-08-hands-on-with-react.native',
          '2017-06-13-machine-learning-for-muggles',
          '2017-05-09-chat-bots',
          '2017-04-11-firefox-containers-isolating-the-web-whilst-hacking-web-extensions',
          '2017-03-14-hands-on-with-react',
          '2017-01-10-elm',
          '2016-12-08-notttechparty-christmas-party-2016',
          '2016-11-08-javascript-cool-wall',
          '2016-10-11-exploring-progressive-web-apps',
          '2016-09-13-realtime-apps-with-node.js-and-rethinkdb'
        ]
        var hash = window.location.hash.substr(1);
        if (hash && pastHashes.indexOf(hash) > -1) {
          window.location.href = '/events/' + hash;
        }
      })`}}>
    </script>
  </>
)

export default Scripts


const tabGroups = {
  '1': {
    tabs: [
      {
        id: '1',
        title: 'Embracing Discovery',
        text: "<p>Every creative endeavor requires that you take risks.\
         If you try and don't succeed, you've still learned something. \
         It took Thomas Edison more than 10,000 tries to invent a viable \
         lightbulb. You're not failing. You're discovering what doesn't work.</p>",
        media: "https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif"
      },
      {
        id: '2',
        title: 'Gaining Insight',
        text: "<p>To spark creativity, feed your brain material \
        like you're cramming for a tough test. Then stop thinking about \
        the problem you want to solve. Go surfing or take a leisurely walk. \
        Research shows that letting your mind wander fosters creativity.</p>\
        <p>It’s also found that meditation helps you spot and solve problems \
        in creative ways. It promotes divergent thinking that gets novel ideas flowing. \
        According to these studies, meditation also makes you more open \
        to considering new solutions. Time to breathe.</p>"
      },
      {
        id: '3',
        title: 'Making It Real',
        text: "<p>No creative process is truly complete until it manifests \
        a tangible reality. Whether your idea is an action or a physical creation, \
        bringing it to life will likely involve the hard work of iteration, testing, \
        and refinement.</p><p>Just be wary of perfectionism. Push yourself to share your \
        creations with others. By maintaining an open stance, you’ll be able to \
        learn from their feedback. Consider their responses new material that \
        you can draw from the next time you’re embarking on a creative endeavor.</p>"
      },
      {
        id: '4',
        title: 'Love The Work',
        text: "<p>Every creative endeavor requires that you take risks. \
        If you try and don't succeed, you've still learned something. It took \
        Thomas Edison more than 10,000 tries to invent a viable lightbulb. \
        You're not failing. You're discovering what doesn't work.</p>",
        media: 'https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/kcA21C-HvSKNkEmO.png'
      },
      {
        id: '5',
        title: 'Have Fun',
        text: "<p>Every creative endeavor requires that you take risks. \
        If you try and don't succeed, you've still learned something. It took \
        Thomas Edison more than 10,000 tries to invent a viable lightbulb. \
        You're not failing. You're discovering what doesn't work.</p>"
      },
      {

      }
    ]
  }
};

export const LOAD_BLOCK = 'LOAD_BLOCK';

const loadBlock = (tabGroup) => ({
  type: LOAD_BLOCK,
  block: tabGroup
});

export const fetchTabGroup = (id) => (dispatch) => {
  dispatch(loadBlock(tabGroups[id]));
};




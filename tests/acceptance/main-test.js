import { test } from 'qunit';
import moduleForAcceptance from 'test-double/tests/helpers/module-for-acceptance';
import RSVP from 'rsvp';

moduleForAcceptance('Acceptance | main');

function sleep(ms) {
  return new RSVP.Promise(resolve => setTimeout(resolve, ms));
}


test('visiting /main', async function(assert) {
  visit('/main');
  await sleep(20000)
  andThen(function() {
    assert.equal(currentURL(), '/main');
  });
});

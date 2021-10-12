// IMPORT MODULES under test here:
import { renderSpice } from '../renderSpices.js';
import { spices } from '../spices.js';

const test = QUnit.test;

test('renderSpice should return HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li id="1" class="spice-card"><h2>Cinnamon</h2><img src="./assets/cinnamon.jpg"><p>Organic fine-ground cinnamon. Add a dash for that Taco Bell-desert twist... twist.</p><p>In stock: 3</p><p>Price: $5</p></li>`;
    const cinnamon = spices[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderSpice(cinnamon).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

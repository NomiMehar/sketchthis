import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Board.scss'
function BoardAccordion() {
  return (
    <React.Fragment>
      <div className="boardAccordion">
      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
          <table className='table-responsive'>
        <Accordion.Header> <thead>
              <tr>
                <th className='w-5'>No</th>
                <th className='w-65'>Description</th>
                <th className='w-15'>Price</th>
                <th className='w-15'>Amount</th>
              </tr>
            </thead></Accordion.Header>
        <Accordion.Body>
           
            <tbody>
              <tr>
                <td className='w-5'><span>1</span></td>
                <td className='w-65'>Bed - Crate&Barrel - Mason Brass Twin Bed - (Width: 42.5". Depth: 79" Height: 55") </td>
                <td className='w-15'><span>$</span>499</td>
                <td className='w-15'><span>x</span>1</td>
              </tr>
                <tr>
                    <td className='w-5'><span>2</span></td>
                    <td className='w-65'>Nightstand - Wayfair - Ottoman 2 drawer nightstand -(Overall: 24'' H x 18'' W x 15'' D)</td>
                    <td className='w-15'><span>$</span>234</td>
                    <td className='w-15'><span>x</span>2</td>
                </tr>
                <tr>
                    <td className='w-5'><span>3</span></td>
                    <td className='w-65'>Chest of drawers - Ikea - Malm - (Width: 31 1/2 " Depth: 18 7/8 " Height: 30 3/4 ")</td>
                    <td className='w-15'><span>$</span>678</td>
                    <td className='w-15'><span>x</span>1</td>
                </tr>
                <tr>
                    <td className='w-5'><span>4</span></td>
                    <td className='w-65'>Rug - Ikea - Tiphede - (Length: 5 ' 11 " Width: 3 ' 11 " Thickness: 0 ")</td>
                    <td className='w-15'><span>$</span>877</td>
                    <td className='w-15'><span>x</span>4</td>
                </tr>
                <tr>
                    <td className='w-5'><span>5</span></td>
                    <td className='w-65'>Lamp - Ikea - ISBRYTARE - (Cord length: 6 ' 7 " Diameter: 4 " Height: 6 " Max.: 9 W)</td>
                    <td className='w-15'><span>$</span>6575</td>
                    <td className='w-15'><span>x</span>3</td>
                </tr>
                <tr>
                    <td className='w-5'><span>6</span></td>
                    <td className='w-65'>Chair - WestElm - Slope Leather Lounge Chair - (Overall: 26.25"w x 28"d x 29.25"h.)</td>
                    <td className='w-15'><span>$</span>435</td>
                    <td className='w-15'><span>x</span>2</td>
                </tr>
                <tr>
                    <td className='w-5'><span>7</span></td>
                    <td className='w-65'>Artwork - Minted - Paper Pattern, Leia - (18"x24")</td>
                    <td className='w-15'><span>$</span>423</td>
                    <td className='w-15'><span>x</span>1</td>
                </tr>
                <tr>
                    <td className='w-5'><span>8</span></td>
                    <td className='w-65'>Paint - Benjamim Moore (see color# HC-81 manchester tan) 1 gallon</td>
                    <td className='w-15'><span>$</span>3249</td>
                    <td className='w-15'><span>x</span>4</td>
                </tr>
                <tr className='total'>
                    <td className='w-5'></td>
                    <td className='w-65'>Total:</td>
                    <td className='w-15'><span>$</span>1,967.95</td>
                    <td className='w-15'><span>x</span>12</td>
                </tr>
            </tbody>
                <p className='tax'>*no shipping or t-ax included </p>
          
        </Accordion.Body>
          </table>
      </Accordion.Item>
      <Accordion.Item eventKey="1" alwaysOpen>
      <table className='table-responsive'>
        <Accordion.Header> <thead>
              <tr>
                <th className='w-5'>Plan</th>
                <th className='w-65'>Mary’s Space </th>
                <th className='w-15'>area</th>
                <th className='w-15'>300 sf</th>
              </tr>
            </thead></Accordion.Header> 
        <Accordion.Body>
           
            <tbody>
              <div className="structure">
                <img src="/images/structure.svg" alt="structure" />
              </div>
            </tbody>
          
        </Accordion.Body>
          </table>
      </Accordion.Item>
    </Accordion>
    <div className="buttons">
    <button className="next-button"><img src="/images/back.svg" alt="next" /> Edit</button>
    <button className="back-button">Save</button>
    </div>
      </div>
    </React.Fragment>
  )
}

export default BoardAccordion

import "../../styles/booking-information.css" 
function BookingInformation () {
    return (
        <>
          <div className="bookingInformation-title">
            <h1>Contact Details</h1>
        </div>
        <div className="booking-table-base">
            {/* Table Structure */}
            <table className="booking-table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>E-mail</th>
                  <th>Phone Number</th>
                  <th>From Address</th>
                  <th>To Address</th>
                  <th>No Of Persons</th>
                  <th>No Of Luggages</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Additional Info</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {contactData.map((contact, index) => ( */}
                  {/* <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td> */}
                     <tr>
                        <td>Test.FullName</td>
                        <td>Test.LastName</td>
                        <td>Test@Gmail.com</td>
                        <td>+962799999999</td>
                        <td>Amman,LTUC</td>
                        <td>Amman,Airport</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3 May</td>
                        <td>15:00</td>
                        <td style={{textWrap:"wrap",width:"25px"}}>With Ac</td>
                        <td >
                        <button style={{color:"red",border:"none",background:"transparent"}}>Delete Record</button>
                          </td>
                        
                  </tr>
                {/* ))} */}
                   
              </tbody>
            </table>
          </div>
        </>
      );
    }
export default BookingInformation;
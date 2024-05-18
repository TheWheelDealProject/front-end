import "../../styles/contact-details.css" 
function ContactDetails () {
    return (
        <>
          <div className="contactDetails-title">
            <h1>Contact Details</h1>
        </div>
        <div className="contact-table-base">
            {/* Table Structure */}
            <table className="contact-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {/* {contactData.map((contact, index) => ( */}
                  {/* <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td> */}
                     <tr>
                        <td>Test.Name</td>
                        <td>Test@Gmail.com</td>
                        <td>This is a test sample</td>
                  </tr>
                {/* ))} */}
                   
              </tbody>
            </table>
          </div>
        </>
      );
    }
export default ContactDetails;
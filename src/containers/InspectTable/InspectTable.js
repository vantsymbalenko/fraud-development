import React from 'react';

const InspectTable = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <td>Case#</td>
          <td>Inspector</td>
          <td>Decision</td>
          <td>Timestamp</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12345</td>
          <td>Ahmad</td>
          <td>
            <select>
              <option>Fraud</option>
              <option>Not fraud</option>
            </select>
          </td>
          <td>121212:121212</td>
        </tr>
        <tr>
          <td>12345</td>
          <td>Ahmad</td>
          <td>
            <select>
              <option>Fraud</option>
              <option>Not fraud</option>
            </select>
          </td>
          <td>121212:121212</td>
        </tr>
        <tr>
          <td>12345</td>
          <td>Ahmad</td>
          <td>
            <select>
              <option>Fraud</option>
              <option>Not fraud</option>
            </select>
          </td>
          <td>121212:121212</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InspectTable;

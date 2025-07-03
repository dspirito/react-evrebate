'use client'

import React, { useState, useRef } from 'react';

const IncentivesComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const stateRef = useRef(null);
  const incentiveRef = useRef(null);

  // Track which result is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Utility to highlight links in HTML
  function highlightLinks(html) {
    return html.replace(
      /<a /g,
      '<a class="underline text-blue-700 hover:text-blue-900 transition-colors" '
    );
  }

  const getIncentives = async () => {
    let Url = 'https://developer.nrel.gov/api/transportation-incentives-laws/v1.json?api_key=pjcHfjLyhnGQEc0sYeZOybWkeEuqYz9LFguQ5zIR';
    Url += '&jurisdiction=' + stateRef.current.value;
    if (incentiveRef.current.value) {
      Url += '&incentive_type=' + incentiveRef.current.value;
    }
    Url += '&technology=ELEC,PHEV,HEV,NEVS';
    Url += '&user_type=IND';

    setLoading(true);
    setError(null);
    setData([]);

    try {
      const response = await fetch(Url);
      if (!response.ok) throw new Error('Network response was not ok');
      const json = await response.json();
      setData(json.result || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Image Section */}
      <div
        className="w-full h-80 md:h-[32rem] flex items-center justify-center mb-8 relative overflow-hidden"
        style={{
          backgroundImage: "url('/1440-Supernova-180-mall.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/20 z-0" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white drop-shadow-lg px-6 py-4 rounded">
          Find Your EV Incentives
        </h1>
      </div>

      {/* Info Section Above Search */}
      <div className="flex flex-wrap bg-white rounded shadow mb-8 max-w-4xl mx-auto p-8">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
          <span className="uppercase tracking-wider text-blue-700 font-semibold text-sm">EVSE Incentives</span>
          <h2 className="text-2xl font-bold mt-2 mb-4">Learn more about incentives for EV charging</h2>
          <p className="text-gray-700">
            To encourage the transition to electric vehicles, many states, cities, communities, and utilities offer incentives for purchasing and installing EV charging stations.
            <br /><br />
            These discount programs, rebates, and tax credits can significantly offset the cost of EV charging equipment and installation, saving you even more money for going electric!
          </p>
        </div>
        <div
          className="w-full md:w-1/2 flex items-center justify-center rounded-lg min-h-[220px] bg-center bg-cover"
          style={{
            backgroundImage: "url('/1024-Fleets.jpg')",
          }}
        >
          {/* Optionally add overlay or leave empty for just the image */}
        </div>
      </div>

      {/* Main Search Section */}
      <div className="flex items-center justify-center py-16 bg-gray-50">
        <div className="search-container max-w-4xl w-full p-6 bg-white rounded shadow">
          <h1 className="text-2xl font-bold mb-4">Search for EV Incentives</h1>
          <p className="mb-4">
            Search for incentives by state and type. If you select &quot;Nationwide Rebates&quot;, the results will include incentives available across all states.
          </p>
          <form
            onSubmit={e => {
              e.preventDefault();
              getIncentives();
            }}
            className="mb-4"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex flex-col flex-1 min-w-[180px]">
                <label htmlFor="stateDD" className="mb-1 font-medium">
                  State:
                </label>
                <select
                  id="stateDD"
                  ref={stateRef}
                  defaultValue=""
                  className="border rounded px-4 py-2"
                >
                  <option disabled value="">Please select your State</option>
                  <option value="US">Nationwide Rebates</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="DC">Washington, D.C.</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 min-w-[180px]">
                <label htmlFor="incentiveDD" className="mb-1 font-medium">
                  Incentive Type:
                </label>
                <select
                  id="incentiveDD"
                  ref={incentiveRef}
                  className="border rounded px-4 py-2"
                >
                  <option value="">All</option>
                  <option value="GNT">Grants</option>
                  <option value="TAX">Tax Incentives</option>
                  <option value="LOANS">Loans and Leases</option>
                  <option value="RBATE">Rebates</option>
                  <option value="EXEM">Exemptions</option>
                  <option value="TOU">Time-of-Use Rate</option>
                  <option value="OTHER">Other Incentive</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Search Incentives
              </button>
            </div>
          </form>
          <div id="results">
            {loading && <div>Loading...</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <ul>
              {data.map((item, index) => (
                <li key={item.id || index} className="mb-4 border-b pb-4">
                  <button
                    type="button"
                    className="w-full text-left focus:outline-none"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <strong className="block text-lg cursor-pointer text-blue-800 hover:underline">
                      {item.title}
                    </strong>
                  </button>
                  {expandedIndex === index && (
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: highlightLinks(item.text),
                      }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncentivesComponent;
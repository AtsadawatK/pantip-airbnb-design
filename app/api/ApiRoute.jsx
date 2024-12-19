import { useEffect, useState } from 'react';

export function GetRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function getAllRooms() {
      const response = await fetch('https://pantip.com/api/community-service/room/get_all?limit=50', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.9,th;q=0.8',
          'Cache-Control': 'max-age=0',
          'Content-Type': 'application/json',
          'Origin': 'https://pantip.com',
          'Referer': 'https://pantip.com/',
          'Sec-CH-UA': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
          'Sec-CH-UA-Mobile': '?1',
          'Sec-CH-UA-Platform': 'Android',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-site',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36',
          'Cookie': 'pantip_visitc=s9f4dl16apvGiMoly7EzC; ka_iid=NFRxDiCBG5feXLeNZnFMP7; iUUID=6183c8e65be41d6f05b1d838880dc0df; _cc_id=eeffab290733c27bb9b318387fe3496a; _ga=GA1.1.152045285.1708874985; _im_vid=01J5DF8NE4YM718WZ8ADBHGJK8; _pbjs_userid_consent_data=3524755945110770; panoramaId_expiry=1725533620211; panoramaId=2af4d144ca3b4fea3e93773ec6da16d53938d1b560dd3c7b3399a417f2040a7c; panoramaIdType=panoIndiv; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; PHPSESSID=j8f6k9lhav6gremqr5q90nvuv2; _cbclose=1; _cbclose39734=1; jiyakeji_uuid=c362f400-6935-11ef-8da9-9d2dae6481b1; OX_plg=wmp|pm; _uid39734=0C368FF2.3; rlr=30084360; visit_time=4; __gads=ID=23dc6bd296551872:T=1709919263:RT=1725295195:S=ALNI_MbFQqTJzsz7SpLjKKWt4lImfI_IrA; __gpi=UID=00000d2d3aed82a3:T=1709919263:RT=1725295195:S=ALNI_MbU95j8VZTpFWZK9XQkaLFz_6C7BQ; __eoi=ID=9dba2c228490b3b6:T=1718096454:RT=1725295195:S=AA-AfjbXsjscL2wpv9radWwLDWih; cto_bundle=UuTnfF84Vzc1VVJVNXZzVzBvMGllVU11MU92NG9DdUJwWlVDRzB3ZTJYZENzUURsRGJiY2laQWFNbWphTHpSM1JRUUxrRTMxeGlob2R1JTJGdUJ2ZEE3M20xJTJCUm5JdmQ4NFFGTmU3S2JRJTJCb3clMkZlMVhLMU1DalBia0JRNnBFTkY0aVdGTFgwcVpZaTNSdHRqVWF5d2FCb2lORW82MEY0c1hJcHgxck15cWYlMkZPQTQxa0EweXZSemtQa1NQWXJxbW9CVHklMkZuZ3FiUFRteTRGb0paanVKTCUyQkZwNm04Nkcyc3V6ZVMyYnZOOUZybDlwajkzUU1tTkYyamVDN21pb2tYYkhDN2R1ako; cto_bidid=C61krV9vaERsdEdScmlDYTh0YTNxamNoQ2t1NTB5ZUxETXpSbnglMkZ2Vm5McSUyRktsTjdvU1lGclQlMkZONjZGbm5VRCUyRjltZkR0d3Q4aWFvVTdmSE1rOWxBbDJWUVF5UERiWkxxYjNKM0hKZEZiY2VENkgwJTNE; pantip_sessions=8pRXkohYDHUXIELhusg89FdvOL7I%2BB4JCytY9lOrKGmN9OA3NSiYwmO7gSrGF4HjkXhsdT6T5VFmvEyQJz7YNI1WTS6Ue0xSh6oZL%2FFomtJkUesIp%2FvTyjRHdRb9vylpnK%2BGQy%2Bal09xlJRRSQL2UZ%2BtM6AEmH%2B%2Bn%2BUm4bl8vwW%2F%2F8rj6uUQ8Z%2FtuGTgVaMkDIn5GUXcjZW4gKmiRENUwAw2XLv1la8g55dwHwCLeuKzTpVo%2FZhjjPtEzj3l4QUcsj9XajplkRvKadUpw68OvIgb7OR5vOZMGQr2y3hYjPCWcQsckUqtdc3RicbBwVavt%2FwVeiOsyeoWl4oESBd35w%3D%3D; innity.dmp.254.sess=1.1725300993743.1725300993743.1725300993743; innity.dmp.254.sess.id=144516850.254.1725300993743; ka_sid=9SiQDLTu43mQiTedeLCf2w; _ga_ZMC2WGXL4Z=GS1.1.1725300993.20.0.1725301006.47.0.0',
          'If-None-Match': 'W/"599-JNB1xj4KZlPNBoYUayNENOVuAJ4"',
          'PTAuthorize': 'Basic dGVzdGVyOnRlc3Rlcg==',
          'X-Client-Data': 'CK61yQEIlrbJAQimtskBCKmdygEI+oXLAQiSocsBCJz+zAEI75jNAQiFoM0BCLaszgE=',
        },
      });
      const data = await response.json();
      if (data.success) {
        setRooms(data.data); // Access the 'data' field here
      }
    }

    getAllRooms();
  }, []);

  return rooms;
}

export function GetHighlight() {
  const [highlight, setHighlight] = useState([]);

  useEffect(() => {
    async function gethighlights() {
      const response = await fetch('https://pantip.com/api/forum-service/home/get_highlight', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.9,th;q=0.8',
          'Cache-Control': 'max-age=0',
          'Content-Type': 'application/json',
          'Origin': 'https://pantip.com',
          'Referer': 'https://pantip.com/',
          'Sec-CH-UA': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
          'Sec-CH-UA-Mobile': '?1',
          'Sec-CH-UA-Platform': 'Android',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-site',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36',
          'Cookie': 'pantip_visitc=s9f4dl16apvGiMoly7EzC; ka_iid=NFRxDiCBG5feXLeNZnFMP7; iUUID=6183c8e65be41d6f05b1d838880dc0df; _cc_id=eeffab290733c27bb9b318387fe3496a; _ga=GA1.1.152045285.1708874985; _im_vid=01J5DF8NE4YM718WZ8ADBHGJK8; _pbjs_userid_consent_data=3524755945110770; panoramaId_expiry=1725533620211; panoramaId=2af4d144ca3b4fea3e93773ec6da16d53938d1b560dd3c7b3399a417f2040a7c; panoramaIdType=panoIndiv; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; PHPSESSID=j8f6k9lhav6gremqr5q90nvuv2; _cbclose=1; _cbclose39734=1; jiyakeji_uuid=c362f400-6935-11ef-8da9-9d2dae6481b1; OX_plg=wmp|pm; _uid39734=0C368FF2.3; rlr=30084360; visit_time=4; __gads=ID=23dc6bd296551872:T=1709919263:RT=1725295195:S=ALNI_MbFQqTJzsz7SpLjKKWt4lImfI_IrA; __gpi=UID=00000d2d3aed82a3:T=1709919263:RT=1725295195:S=ALNI_MbU95j8VZTpFWZK9XQkaLFz_6C7BQ; __eoi=ID=9dba2c228490b3b6:T=1718096454:RT=1725295195:S=AA-AfjbXsjscL2wpv9radWwLDWih; cto_bundle=UuTnfF84Vzc1VVJVNXZzVzBvMGllVU11MU92NG9DdUJwWlVDRzB3ZTJYZENzUURsRGJiY2laQWFNbWphTHpSM1JRUUxrRTMxeGlob2R1JTJGdUJ2ZEE3M20xJTJCUm5JdmQ4NFFGTmU3S2JRJTJCb3clMkZlMVhLMU1DalBia0JRNnBFTkY0aVdGTFgwcVpZaTNSdHRqVWF5d2FCb2lORW82MEY0c1hJcHgxck15cWYlMkZPQTQxa0EweXZSemtQa1NQWXJxbW9CVHklMkZuZ3FiUFRteTRGb0paanVKTCUyQkZwNm04Nkcyc3V6ZVMyYnZOOUZybDlwajkzUU1tTkYyamVDN21pb2tYYkhDN2R1ako; cto_bidid=C61krV9vaERsdEdScmlDYTh0YTNxamNoQ2t1NTB5ZUxETXpSbnglMkZ2Vm5McSUyRktsTjdvU1lGclQlMkZONjZGbm5VRCUyRjltZkR0d3Q4aWFvVTdmSE1rOWxBbDJWUVF5UERiWkxxYjNKM0hKZEZiY2VENkgwJTNE; pantip_sessions=8pRXkohYDHUXIELhusg89FdvOL7I%2BB4JCytY9lOrKGmN9OA3NSiYwmO7gSrGF4HjkXhsdT6T5VFmvEyQJz7YNI1WTS6Ue0xSh6oZL%2FFomtJkUesIp%2FvTyjRHdRb9vylpnK%2BGQy%2Bal09xlJRRSQL2UZ%2BtM6AEmH%2B%2Bn%2BUm4bl8vwW%2F%2F8rj6uUQ8Z%2FtuGTgVaMkDIn5GUXcjZW4gKmiRENUwAw2XLv1la8g55dwHwCLeuKzTpVo%2FZhjjPtEzj3l4QUcsj9XajplkRvKadUpw68OvIgb7OR5vOZMGQr2y3hYjPCWcQsckUqtdc3RicbBwVavt%2FwVeiOsyeoWl4oESBd35w%3D%3D; innity.dmp.254.sess=1.1725300993743.1725300993743.1725300993743; innity.dmp.254.sess.id=144516850.254.1725300993743; ka_sid=9SiQDLTu43mQiTedeLCf2w; _ga_ZMC2WGXL4Z=GS1.1.1725300993.20.0.1725301006.47.0.0',
          'If-None-Match': 'W/"599-JNB1xj4KZlPNBoYUayNENOVuAJ4"',
          'PTAuthorize': 'Basic dGVzdGVyOnRlc3Rlcg==',
          'X-Client-Data': 'CK61yQEIlrbJAQimtskBCKmdygEI+oXLAQiSocsBCJz+zAEI75jNAQiFoM0BCLaszgE=',
        },
      });
      const data = await response.json();
      if (data.success) {
        setHighlight(data.data); // Access the 'data' field here
      }
    }

    gethighlights();
  }, []);

  return highlight;
}

export function GetRealtimeTopic() {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    async function getrealtimetopics() {
      const response = await fetch('https://pantip.com/api/forum-service/home/get_suggest_topic_behavior?tracking_code=s9f4dl16apvGiMoly7EzC', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.9,th;q=0.8',
          'Cache-Control': 'max-age=0',
          'Content-Type': 'application/json',
          'Origin': 'https://pantip.com',
          'Referer': 'https://pantip.com/',
          'Sec-CH-UA': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
          'Sec-CH-UA-Mobile': '?1',
          'Sec-CH-UA-Platform': 'Android',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-site',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36',
          'Cookie': 'pantip_visitc=s9f4dl16apvGiMoly7EzC; ka_iid=NFRxDiCBG5feXLeNZnFMP7; iUUID=6183c8e65be41d6f05b1d838880dc0df; _cc_id=eeffab290733c27bb9b318387fe3496a; _ga=GA1.1.152045285.1708874985; _im_vid=01J5DF8NE4YM718WZ8ADBHGJK8; _pbjs_userid_consent_data=3524755945110770; panoramaId_expiry=1725533620211; panoramaId=2af4d144ca3b4fea3e93773ec6da16d53938d1b560dd3c7b3399a417f2040a7c; panoramaIdType=panoIndiv; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; PHPSESSID=j8f6k9lhav6gremqr5q90nvuv2; _cbclose=1; _cbclose39734=1; jiyakeji_uuid=c362f400-6935-11ef-8da9-9d2dae6481b1; OX_plg=wmp|pm; _uid39734=0C368FF2.3; rlr=30084360; visit_time=4; __gads=ID=23dc6bd296551872:T=1709919263:RT=1725295195:S=ALNI_MbFQqTJzsz7SpLjKKWt4lImfI_IrA; __gpi=UID=00000d2d3aed82a3:T=1709919263:RT=1725295195:S=ALNI_MbU95j8VZTpFWZK9XQkaLFz_6C7BQ; __eoi=ID=9dba2c228490b3b6:T=1718096454:RT=1725295195:S=AA-AfjbXsjscL2wpv9radWwLDWih; cto_bundle=UuTnfF84Vzc1VVJVNXZzVzBvMGllVU11MU92NG9DdUJwWlVDRzB3ZTJYZENzUURsRGJiY2laQWFNbWphTHpSM1JRUUxrRTMxeGlob2R1JTJGdUJ2ZEE3M20xJTJCUm5JdmQ4NFFGTmU3S2JRJTJCb3clMkZlMVhLMU1DalBia0JRNnBFTkY0aVdGTFgwcVpZaTNSdHRqVWF5d2FCb2lORW82MEY0c1hJcHgxck15cWYlMkZPQTQxa0EweXZSemtQa1NQWXJxbW9CVHklMkZuZ3FiUFRteTRGb0paanVKTCUyQkZwNm04Nkcyc3V6ZVMyYnZOOUZybDlwajkzUU1tTkYyamVDN21pb2tYYkhDN2R1ako; cto_bidid=C61krV9vaERsdEdScmlDYTh0YTNxamNoQ2t1NTB5ZUxETXpSbnglMkZ2Vm5McSUyRktsTjdvU1lGclQlMkZONjZGbm5VRCUyRjltZkR0d3Q4aWFvVTdmSE1rOWxBbDJWUVF5UERiWkxxYjNKM0hKZEZiY2VENkgwJTNE; pantip_sessions=8pRXkohYDHUXIELhusg89FdvOL7I%2BB4JCytY9lOrKGmN9OA3NSiYwmO7gSrGF4HjkXhsdT6T5VFmvEyQJz7YNI1WTS6Ue0xSh6oZL%2FFomtJkUesIp%2FvTyjRHdRb9vylpnK%2BGQy%2Bal09xlJRRSQL2UZ%2BtM6AEmH%2B%2Bn%2BUm4bl8vwW%2F%2F8rj6uUQ8Z%2FtuGTgVaMkDIn5GUXcjZW4gKmiRENUwAw2XLv1la8g55dwHwCLeuKzTpVo%2FZhjjPtEzj3l4QUcsj9XajplkRvKadUpw68OvIgb7OR5vOZMGQr2y3hYjPCWcQsckUqtdc3RicbBwVavt%2FwVeiOsyeoWl4oESBd35w%3D%3D; innity.dmp.254.sess=1.1725300993743.1725300993743.1725300993743; innity.dmp.254.sess.id=144516850.254.1725300993743; ka_sid=9SiQDLTu43mQiTedeLCf2w; _ga_ZMC2WGXL4Z=GS1.1.1725300993.20.0.1725301006.47.0.0',
          'If-None-Match': 'W/"599-JNB1xj4KZlPNBoYUayNENOVuAJ4"',
          'PTAuthorize': 'Basic dGVzdGVyOnRlc3Rlcg==',
          'X-Client-Data': 'CK61yQEIlrbJAQimtskBCKmdygEI+oXLAQiSocsBCJz+zAEI75jNAQiFoM0BCLaszgE=',
        },
      });
      const data = await response.json();
      if (data.success) {
        setTopic(data.data); // Access the 'data' field here
      }
    }

    getrealtimetopics();
  }, []);

  return topic;
}

export function GetTags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function gettag() {
      const response = await fetch('https://pantip.com/api/forum-service/home/get_tag_hit?limit=10', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.9,th;q=0.8',
          'Cache-Control': 'max-age=0',
          'Content-Type': 'application/json',
          'Origin': 'https://pantip.com',
          'Referer': 'https://pantip.com/',
          'Sec-CH-UA': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
          'Sec-CH-UA-Mobile': '?1',
          'Sec-CH-UA-Platform': 'Android',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-site',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36',
          'Cookie': 'pantip_visitc=s9f4dl16apvGiMoly7EzC; ka_iid=NFRxDiCBG5feXLeNZnFMP7; iUUID=6183c8e65be41d6f05b1d838880dc0df; _cc_id=eeffab290733c27bb9b318387fe3496a; _ga=GA1.1.152045285.1708874985; _im_vid=01J5DF8NE4YM718WZ8ADBHGJK8; _pbjs_userid_consent_data=3524755945110770; panoramaId_expiry=1725533620211; panoramaId=2af4d144ca3b4fea3e93773ec6da16d53938d1b560dd3c7b3399a417f2040a7c; panoramaIdType=panoIndiv; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; PHPSESSID=j8f6k9lhav6gremqr5q90nvuv2; _cbclose=1; _cbclose39734=1; jiyakeji_uuid=c362f400-6935-11ef-8da9-9d2dae6481b1; OX_plg=wmp|pm; _uid39734=0C368FF2.3; rlr=30084360; visit_time=4; __gads=ID=23dc6bd296551872:T=1709919263:RT=1725295195:S=ALNI_MbFQqTJzsz7SpLjKKWt4lImfI_IrA; __gpi=UID=00000d2d3aed82a3:T=1709919263:RT=1725295195:S=ALNI_MbU95j8VZTpFWZK9XQkaLFz_6C7BQ; __eoi=ID=9dba2c228490b3b6:T=1718096454:RT=1725295195:S=AA-AfjbXsjscL2wpv9radWwLDWih; cto_bundle=UuTnfF84Vzc1VVJVNXZzVzBvMGllVU11MU92NG9DdUJwWlVDRzB3ZTJYZENzUURsRGJiY2laQWFNbWphTHpSM1JRUUxrRTMxeGlob2R1JTJGdUJ2ZEE3M20xJTJCUm5JdmQ4NFFGTmU3S2JRJTJCb3clMkZlMVhLMU1DalBia0JRNnBFTkY0aVdGTFgwcVpZaTNSdHRqVWF5d2FCb2lORW82MEY0c1hJcHgxck15cWYlMkZPQTQxa0EweXZSemtQa1NQWXJxbW9CVHklMkZuZ3FiUFRteTRGb0paanVKTCUyQkZwNm04Nkcyc3V6ZVMyYnZOOUZybDlwajkzUU1tTkYyamVDN21pb2tYYkhDN2R1ako; cto_bidid=C61krV9vaERsdEdScmlDYTh0YTNxamNoQ2t1NTB5ZUxETXpSbnglMkZ2Vm5McSUyRktsTjdvU1lGclQlMkZONjZGbm5VRCUyRjltZkR0d3Q4aWFvVTdmSE1rOWxBbDJWUVF5UERiWkxxYjNKM0hKZEZiY2VENkgwJTNE; pantip_sessions=8pRXkohYDHUXIELhusg89FdvOL7I%2BB4JCytY9lOrKGmN9OA3NSiYwmO7gSrGF4HjkXhsdT6T5VFmvEyQJz7YNI1WTS6Ue0xSh6oZL%2FFomtJkUesIp%2FvTyjRHdRb9vylpnK%2BGQy%2Bal09xlJRRSQL2UZ%2BtM6AEmH%2B%2Bn%2BUm4bl8vwW%2F%2F8rj6uUQ8Z%2FtuGTgVaMkDIn5GUXcjZW4gKmiRENUwAw2XLv1la8g55dwHwCLeuKzTpVo%2FZhjjPtEzj3l4QUcsj9XajplkRvKadUpw68OvIgb7OR5vOZMGQr2y3hYjPCWcQsckUqtdc3RicbBwVavt%2FwVeiOsyeoWl4oESBd35w%3D%3D; innity.dmp.254.sess=1.1725300993743.1725300993743.1725300993743; innity.dmp.254.sess.id=144516850.254.1725300993743; ka_sid=9SiQDLTu43mQiTedeLCf2w; _ga_ZMC2WGXL4Z=GS1.1.1725300993.20.0.1725301006.47.0.0',
          'If-None-Match': 'W/"599-JNB1xj4KZlPNBoYUayNENOVuAJ4"',
          'PTAuthorize': 'Basic dGVzdGVyOnRlc3Rlcg==',
          'X-Client-Data': 'CK61yQEIlrbJAQimtskBCKmdygEI+oXLAQiSocsBCJz+zAEI75jNAQiFoM0BCLaszgE=',
        },
      });
      const data = await response.json();
      if (data.success) {
        setTags(data.data); // Access the 'data' field here
      }
    }

    gettag();
  }, []);

  return tags;
}

export function GetClubs() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    async function getclub() {
      const response = await fetch('https://pantip.com/api/forum-service/forum/room_clubs?room=all&limit=20', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.9,th;q=0.8',
          'Cache-Control': 'max-age=0',
          'Content-Type': 'application/json',
          'Origin': 'https://pantip.com',
          'Referer': 'https://pantip.com/',
          'Sec-CH-UA': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
          'Sec-CH-UA-Mobile': '?1',
          'Sec-CH-UA-Platform': 'Android',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-site',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36',
          'Cookie': 'pantip_visitc=s9f4dl16apvGiMoly7EzC; ka_iid=NFRxDiCBG5feXLeNZnFMP7; iUUID=6183c8e65be41d6f05b1d838880dc0df; _cc_id=eeffab290733c27bb9b318387fe3496a; _ga=GA1.1.152045285.1708874985; _im_vid=01J5DF8NE4YM718WZ8ADBHGJK8; _pbjs_userid_consent_data=3524755945110770; panoramaId_expiry=1725533620211; panoramaId=2af4d144ca3b4fea3e93773ec6da16d53938d1b560dd3c7b3399a417f2040a7c; panoramaIdType=panoIndiv; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; PHPSESSID=j8f6k9lhav6gremqr5q90nvuv2; _cbclose=1; _cbclose39734=1; jiyakeji_uuid=c362f400-6935-11ef-8da9-9d2dae6481b1; OX_plg=wmp|pm; _uid39734=0C368FF2.3; rlr=30084360; visit_time=4; __gads=ID=23dc6bd296551872:T=1709919263:RT=1725295195:S=ALNI_MbFQqTJzsz7SpLjKKWt4lImfI_IrA; __gpi=UID=00000d2d3aed82a3:T=1709919263:RT=1725295195:S=ALNI_MbU95j8VZTpFWZK9XQkaLFz_6C7BQ; __eoi=ID=9dba2c228490b3b6:T=1718096454:RT=1725295195:S=AA-AfjbXsjscL2wpv9radWwLDWih; cto_bundle=UuTnfF84Vzc1VVJVNXZzVzBvMGllVU11MU92NG9DdUJwWlVDRzB3ZTJYZENzUURsRGJiY2laQWFNbWphTHpSM1JRUUxrRTMxeGlob2R1JTJGdUJ2ZEE3M20xJTJCUm5JdmQ4NFFGTmU3S2JRJTJCb3clMkZlMVhLMU1DalBia0JRNnBFTkY0aVdGTFgwcVpZaTNSdHRqVWF5d2FCb2lORW82MEY0c1hJcHgxck15cWYlMkZPQTQxa0EweXZSemtQa1NQWXJxbW9CVHklMkZuZ3FiUFRteTRGb0paanVKTCUyQkZwNm04Nkcyc3V6ZVMyYnZOOUZybDlwajkzUU1tTkYyamVDN21pb2tYYkhDN2R1ako; cto_bidid=C61krV9vaERsdEdScmlDYTh0YTNxamNoQ2t1NTB5ZUxETXpSbnglMkZ2Vm5McSUyRktsTjdvU1lGclQlMkZONjZGbm5VRCUyRjltZkR0d3Q4aWFvVTdmSE1rOWxBbDJWUVF5UERiWkxxYjNKM0hKZEZiY2VENkgwJTNE; pantip_sessions=8pRXkohYDHUXIELhusg89FdvOL7I%2BB4JCytY9lOrKGmN9OA3NSiYwmO7gSrGF4HjkXhsdT6T5VFmvEyQJz7YNI1WTS6Ue0xSh6oZL%2FFomtJkUesIp%2FvTyjRHdRb9vylpnK%2BGQy%2Bal09xlJRRSQL2UZ%2BtM6AEmH%2B%2Bn%2BUm4bl8vwW%2F%2F8rj6uUQ8Z%2FtuGTgVaMkDIn5GUXcjZW4gKmiRENUwAw2XLv1la8g55dwHwCLeuKzTpVo%2FZhjjPtEzj3l4QUcsj9XajplkRvKadUpw68OvIgb7OR5vOZMGQr2y3hYjPCWcQsckUqtdc3RicbBwVavt%2FwVeiOsyeoWl4oESBd35w%3D%3D; innity.dmp.254.sess=1.1725300993743.1725300993743.1725300993743; innity.dmp.254.sess.id=144516850.254.1725300993743; ka_sid=9SiQDLTu43mQiTedeLCf2w; _ga_ZMC2WGXL4Z=GS1.1.1725300993.20.0.1725301006.47.0.0',
          'If-None-Match': 'W/"599-JNB1xj4KZlPNBoYUayNENOVuAJ4"',
          'PTAuthorize': 'Basic dGVzdGVyOnRlc3Rlcg==',
          'X-Client-Data': 'CK61yQEIlrbJAQimtskBCKmdygEI+oXLAQiSocsBCJz+zAEI75jNAQiFoM0BCLaszgE=',
        },
      });
      const data = await response.json();
      if (data.success) {
        setClubs(data.data); // Access the 'data' field here
      }
    }

    getclub();
  }, []);

  return clubs;
}

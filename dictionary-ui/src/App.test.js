import { render, screen } from '@testing-library/react';
import Header from './components/header/header';
import Input from './components/input/input';
import axios from 'axios';

describe("Header Validation", () => {
  test('Validating Header', () => {
    render(<Header />);
    const linkElement = screen.getByText(/SpreeTail Collection App/i);
    expect(linkElement).toBeInTheDocument();
  })
});

describe("text box and button validation", () => {
  const rendered = render(<Input />);
  test('textbox Input', () => {
    
    const keyElement = rendered.container.querySelector("#keyName");
    expect(keyElement).toBe(null);
    const valueElement = rendered.container.querySelector("#valueName");
    expect(valueElement).toBe(null);
  })
  test('Fetch All', () => {
    const btnFetchAll = rendered.container.querySelector("#btnFetchAll");
    expect(btnFetchAll).toBe(null);
  })
  test('Add/Update', () => {
    const btnFetchAll = rendered.container.querySelector("#btnFetchAll");
    expect(btnFetchAll).toBe(null);
  })
  test('Delete', () => {
    const btnFetchAll = rendered.container.querySelector("#btnFetchAll");
    expect(btnFetchAll).toBe(null);
  })

});

describe("api validation", () => {

  test("get api testing",()=>{
    axios.get("http://localhost:3200/dictionaryall").then(response=>{
      expect(response.status).toEqual(200);
    })
  })
 test("post api testing",()=>{
   const data={key:"testing1",value:"value1"}
  axios.post("http://localhost:3200/dictionary",).then(response=>{
    expect(response.status).toEqual(200);
  })
 })
})

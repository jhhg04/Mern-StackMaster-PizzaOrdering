import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Pizza from '../components/Pizza';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <div className='row justify-content-center'>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error='Something went Wrong' />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div key={pizza._id} className='col-md-3 m-3'>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

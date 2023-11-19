"use client"
import React from 'react';

const LoaderAnimation = () => {
    return (
        <>
          <div className="container-fluid">
              <div className="row justify-content-center">
                  <div className="col-4">
                      <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                      </div>
                  </div>
              </div>
          </div>
        </>
    );
};

export default LoaderAnimation;
import React, { Component } from 'react';
import '../../css/home.css';

export default class MainContent extends Component{
    render(){
        return(
            <main className="main-content">
              <nav className="main-content__navbar">
                  <h2>Scenarios</h2>
                  <ul className="main-content__scenario-list">
                      <li className="main-content__scenario-list-item_active_true">Scenario 1</li>
                      <li>Scenario 2</li>
                      <li><span>+</span> Add section</li>
                  </ul>
              </nav>
                <section className="main-content__scenario-details">
                    <h2>Scenario 1</h2>
                    <section>
                        <h3>Decryption</h3>
                        <div className="main-content__scenario-details-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, cum cumque dolores eius enim exercitationem, harum impedit labore libero magni molestias necessitatibus odit quasi reiciendis repellat reprehenderit totam vero.
                        </div>
                    </section>
                </section>
                <section className="main-content__scenario-actions">
                    actions
                </section>
            </main>
        )
    }
}
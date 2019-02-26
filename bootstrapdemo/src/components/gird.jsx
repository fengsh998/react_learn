import React, { Component } from 'react'

export default class Gird extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="bg-primary col-sm">
                        One of three columns
                    </div>
                    <div class="bg-secondary col-sm">
                        One of three columnskk
                    </div>
                    <div class="bg-success col-sm">
                        One of three columns
                    </div>
                </div>

                <div class="row">
                    <div class="bg-primary col">
                        1 of 2
                    </div>
                    <div class="bg-secondary col">
                        2 of 2
                    </div>
                </div>
                <div class="row">
                    <div class="bg-warning col">
                        1 of 3
                    </div>
                    <div class="bg-danger col">
                        2 of 3
                    </div>
                    <div class="bg-secondary col">
                        3 of 3
                    </div>
                </div>
            </div>


        )
    }
}

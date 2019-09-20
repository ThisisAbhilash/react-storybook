import React from 'react';
import DayPicker from 'react-day-picker';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from '../../calendar.jpg';
import styled from 'styled-components';
import 'react-day-picker/lib/style.css';

const ExternalDiv = styled.div`
    background: ${props => props.backgroundColor ? props.backgroundColor : ''};
    width: ${props => props.externalWidth};
`;
const InnerDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 6px;
`;

class DatePicker extends React.Component {

    state = { calendarOpen: false };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
    }
    toggleCalendar = () => {
        this.setState({ calendarOpen: !this.state.calendarOpen });
    }
    handleDayClick(day) {
        this.setState({ calendarOpen: false }, () => this.props.onDateSelect(day));
    }
    render() {
        const { backgroundColor, externalWidth, value, dateFormat, imageWidth, maxDate, minDate } = this.props,
            { calendarOpen } = this.state;
        return (
            <React.Fragment>
                <ExternalDiv backgroundColor={backgroundColor} externalWidth={externalWidth}>
                    <InnerDiv>
                        <span>{moment(value).format(dateFormat)}</span>
                        <img src={Calendar} alt="" width={imageWidth}
                            style={{ marginLeft: 15, cursor: 'pointer' }} onClick={this.toggleCalendar} />
                    </InnerDiv>
                </ExternalDiv>
                {calendarOpen &&
                    <DayPicker
                        onDayClick={this.handleDayClick}
                        selectedDays={value}
                        disabledDays={{ after: maxDate, before: minDate }}
                    />
                }
            </React.Fragment>
        )
    }
}

DatePicker.defaultProps = {
    value: new Date(),
    dateFormat: 'Do MMM YYYY',
    externalWidth: '140px',
    imageWidth: '20px',
    maxDate: null,
    minDate: null
}

DatePicker.propTypes = {
    value: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    dateFormat: PropTypes.string,
    backgroundColor: PropTypes.string,
    externalWidth: PropTypes.string,
    imageWidth: PropTypes.string,
    onDateSelect: PropTypes.func.isRequired
};

export default DatePicker;
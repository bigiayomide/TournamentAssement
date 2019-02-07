using AutoMapper;
using HWBTournament.API.ViewModels;
using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.Controllers
{
    [Produces("application/json")]
    [Route("api/EventDetail")]
    [ProducesResponseType(201)]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    public class EventDetailController : Controller
    {
        private readonly IEventDetailRepository _eventDetailRepository;
        private readonly ILoggingRepository _loggingRepository;
        private readonly IMapper _mapper;
        //int page = 1;
        //int pageSize = 10;

        public EventDetailController(IEventDetailRepository eventDetailRepository,
                         ILoggingRepository _errorRepository, IMapper mapper)
        {

            _eventDetailRepository = eventDetailRepository;
            _loggingRepository = _errorRepository;
            _mapper = mapper;
        }

        [HttpGet("{id}", Name = "GetEventDetail")]
        public IActionResult Get(long id)
        {
            eventdetail _eventdetail = _eventDetailRepository.GetSingle(u => u.Id == id);
            if (_eventdetail != null)
            {
                EventDetailViewModel _eventDetailVM = _mapper.Map<eventdetail, EventDetailViewModel>(_eventdetail);
                return new OkObjectResult(_eventDetailVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] EventDetailViewModel eventdetailvm)
        {
            if (!ModelState.IsValid || eventdetailvm == null)
            {
                return BadRequest(ModelState);
            }

            eventdetail _newevent = new eventdetail
            {
                event_id = eventdetailvm.event_id,
                event_status_id = eventdetailvm.event_status_id,
                event_detail_name = eventdetailvm.event_detail_name,
                event_detail_number = eventdetailvm.event_detail_number,
                event_detail_odd = eventdetailvm.event_detail_odd,
                finishing_position = eventdetailvm.finishing_position,
                first_timer = eventdetailvm.first_timer,
            };

            eventdetail _newCreatedEventDetail = _eventDetailRepository.CreateEventDetail(_newevent);


            if (_newCreatedEventDetail == null)
            {
                return new OkObjectResult(eventdetailvm);
            }

            eventdetailvm = new EventDetailViewModel
            {
                Id = _newCreatedEventDetail.Id,
                event_id = _newCreatedEventDetail.event_id,
                event_status_id = _newCreatedEventDetail.event_status_id,
                event_detail_name = _newCreatedEventDetail.event_detail_name,
                event_detail_number = _newCreatedEventDetail.event_detail_number,
                event_detail_odd = _newCreatedEventDetail.event_detail_odd,
                finishing_position = _newCreatedEventDetail.finishing_position,
                first_timer = _newCreatedEventDetail.first_timer,
            };

            return new OkObjectResult(eventdetailvm);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            eventdetail _eventdetail = _eventDetailRepository.GetSingle(u => u.Id == id);
            if (_eventdetail != null)
            {
                _eventDetailRepository.Delete(_eventdetail);
                EventDetailViewModel _eventdetailVM = _mapper.Map<eventdetail, EventDetailViewModel>(_eventdetail);
                return new OkObjectResult(_eventdetailVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet(Name = "GetAllEventDetails")]
        public IActionResult Update()
        {
            IEnumerable<eventdetail> _event = _eventDetailRepository.GetEventDetails();
            if (_event != null)
            {
                IEnumerable<EventDetailViewModel> _eventdetailVM = _mapper.Map<IEnumerable<eventdetail>, IEnumerable<EventDetailViewModel>>(_event);
                return new OkObjectResult(_eventdetailVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPatch]
        public IActionResult Update([FromBody] EventDetailViewModel eventvm)
        {
            eventdetail _eventdetail = _eventDetailRepository.GetSingle(u => u.Id == eventvm.Id);
            if (_eventdetail != null)
            {
                _eventdetail.Id = _eventdetail.Id;
                _eventdetail.event_id = _eventdetail.event_id;
                _eventdetail.event_status_id = _eventdetail.event_status_id;
                _eventdetail.event_detail_name = _eventdetail.event_detail_name;
                _eventdetail.event_detail_number = _eventdetail.event_detail_number;
                _eventdetail.event_detail_odd = _eventdetail.event_detail_odd;
                _eventdetail.finishing_position = _eventdetail.finishing_position;
                _eventdetail.first_timer = _eventdetail.first_timer;
                _eventDetailRepository.Update(_eventdetail);
                EventDetailViewModel _eventdetailVM = _mapper.Map<eventdetail, EventDetailViewModel>(_eventdetail);
                return new OkObjectResult(_eventdetailVM);
            }
            else
            {
                return NotFound();
            }
        }
    }
}

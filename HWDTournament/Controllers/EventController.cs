using AutoMapper;
using HWBTournament.API.ViewModels;
using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Event")]
    [Authorize]
    public class EventController : Controller
    {
        private readonly IEventRepository _eventRepository;
        private readonly ILoggingRepository _loggingRepository;
        private readonly IMapper _mapper;
        //int page = 1;
        //int pageSize = 10;

        public EventController(IEventRepository eventRepository,
                         ILoggingRepository _errorRepository, IMapper mapper)
        {

            _eventRepository = eventRepository;
            _loggingRepository = _errorRepository;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            @event _event = _eventRepository.GetSingle(u => u.Id == id);
            if (_event != null)
            {
                EventViewModel _eventVM = _mapper.Map<@event, EventViewModel>(_event);
                return new OkObjectResult(_eventVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] EventViewModel eventvm)
        {
            if (!ModelState.IsValid || eventvm == null)
            {
                return BadRequest(ModelState);
            }

            @event _newevent = new @event
            {
                event_date_time = eventvm.event_date_time,
                auto_close= eventvm.auto_close,

            };

            @event _newCreatedEvent = _eventRepository.CreateEvent(_newevent);


            if (_newCreatedEvent == null)
            {
                return new OkObjectResult(eventvm);
            }

            eventvm = new EventViewModel
            {
                Id = _newCreatedEvent.Id,
                auto_close= _newCreatedEvent.auto_close,
                event_date_time= _newCreatedEvent.event_date_time,
                event_end_date_time= _newCreatedEvent.event_end_date_time,
                event_name= _newCreatedEvent.event_name,
                event_number= _newCreatedEvent.event_number,
                tournament_id= _newCreatedEvent.tournament_id
            };

            return new OkObjectResult(eventvm);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            @event _event = _eventRepository.GetSingle(u => u.Id == id);
            if (_event != null)
            {
                _eventRepository.Delete(_event);
                EventViewModel _tournamentVM = _mapper.Map<@event, EventViewModel>(_event);
                return new OkObjectResult(_tournamentVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet]
        public IActionResult Update()
        {
            IEnumerable<@event> _event = _eventRepository.GetEvents();
            if (_event != null)
            {
                IEnumerable<EventViewModel> _eventVM = _mapper.Map<IEnumerable<@event>, IEnumerable<EventViewModel>>(_event);
                return new OkObjectResult(_eventVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPatch]
        public IActionResult Update([FromBody] EventViewModel eventvm)
        {
            @event _event = _eventRepository.GetSingle(u => u.Id == eventvm.Id);
            if (_event != null)
            {
                _event.Id = eventvm.Id;
                _event.auto_close = eventvm.auto_close;
                _event.event_date_time = eventvm.event_date_time;
                _event.event_end_date_time = eventvm.event_end_date_time;
                _event.event_name = eventvm.event_name;
                _event.event_number = eventvm.event_number;
                _event.tournament_id = eventvm.tournament_id;
                _eventRepository.Update(_event);
                EventViewModel _eventVM = _mapper.Map<@event, EventViewModel>(_event);
                return new OkObjectResult(_eventVM);
            }
            else
            {
                return NotFound();
            }
        }
    }

}

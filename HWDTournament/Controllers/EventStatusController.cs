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
    [Route("api/EventStatus")]
    [ProducesResponseType(201)]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [Authorize]
    public class EventStatusController : Controller
    {
        
        private readonly IEventDetailStatusRepository _eventStatusRepository;
        private readonly ILoggingRepository _loggingRepository;
        private readonly IMapper _mapper;
        //int page = 1;
        //int pageSize = 10;

        public EventStatusController(IEventDetailStatusRepository eventStatusRepository,
                         ILoggingRepository _errorRepository, IMapper mapper)
        {

            _eventStatusRepository = eventStatusRepository;
            _loggingRepository = _errorRepository;
            _mapper = mapper;
        }

        [HttpGet("{id}", Name = "GetEventStatusDetail")]
        public IActionResult Get(long id)
        {
            eventdetailstatus _eventStatus = _eventStatusRepository.GetSingle(u => u.Id == id);
            if (_eventStatus != null)
            {
                EventStatusViewModel _eventStatusVM = _mapper.Map<eventdetailstatus, EventStatusViewModel>(_eventStatus);
                return new OkObjectResult(_eventStatusVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] EventStatusViewModel eventStatusvm)
        {
            if (!ModelState.IsValid || eventStatusvm == null)
            {
                return BadRequest(ModelState);
            }

            eventdetailstatus _newevent = new eventdetailstatus
            {
                 Id= eventStatusvm.Id,
                  event_detail_status_name= eventStatusvm.event_detail_status_name
            };

            eventdetailstatus _newCreatedEventStatus = _eventStatusRepository.CreateEventStatusDetail(_newevent);


            if (_newCreatedEventStatus == null)
            {
                return new OkObjectResult(eventStatusvm);
            }

            eventStatusvm = new EventStatusViewModel
            {
                Id = _newCreatedEventStatus.Id,
                 event_detail_status_name= _newCreatedEventStatus.event_detail_status_name
            };

            return new OkObjectResult(eventStatusvm);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            eventdetailstatus _eventStatus = _eventStatusRepository.GetSingle(u => u.Id == id);
            if (_eventStatus != null)
            {
                _eventStatusRepository.Delete(_eventStatus);
                EventStatusViewModel _eventStatusVM = _mapper.Map<eventdetailstatus, EventStatusViewModel>(_eventStatus);
                return new OkObjectResult(_eventStatusVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            IEnumerable<eventdetailstatus> _event = _eventStatusRepository.GetEventStatusDetails();
            if (_event != null)
            {
                IEnumerable<EventStatusViewModel> _eventStatusVM = _mapper.Map<IEnumerable<eventdetailstatus>, IEnumerable<EventStatusViewModel>>(_event);
                return new OkObjectResult(_eventStatusVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPatch]
        public IActionResult Update([FromBody] EventStatusViewModel eventstatusvm)
        {
            eventdetailstatus _eventStatus = _eventStatusRepository.GetSingle(u => u.Id == eventstatusvm.Id);
            if (_eventStatus != null)
            {
                _eventStatus.Id = eventstatusvm.Id;
                _eventStatus.event_detail_status_name = eventstatusvm.event_detail_status_name;
                _eventStatusRepository.Update(_eventStatus);
                EventStatusViewModel _eventStatusVM = _mapper.Map<eventdetailstatus, EventStatusViewModel>(_eventStatus);
                return new OkObjectResult(_eventStatusVM);
            }
            else
            {
                return NotFound();
            }
        }
    }
}

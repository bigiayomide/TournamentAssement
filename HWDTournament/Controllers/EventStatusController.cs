using AutoMapper;
using HWBTournament.API.ViewModels;
using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System.Collections.Generic;

namespace HWBTournament.API.Controllers
{
    [Produces("application/json")]
    [Route("api/EventStatus")]
    [ProducesResponseType(201)]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    //[Authorize]
    public class EventStatusController : Controller
    {
        
        private readonly IEventDetailStatusRepository _eventStatusRepository;

        private readonly IMapper _mapper;
        //int page = 1;
        //int pageSize = 10;

        public EventStatusController(IEventDetailStatusRepository eventStatusRepository,IMapper mapper)
        {
            _eventStatusRepository = eventStatusRepository;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            EventDetailStatus _eventStatus = _eventStatusRepository.GetSingle(u => u.Id == id);
            if (_eventStatus != null)
            {
                EventStatusViewModel _eventStatusVM = _mapper.Map<EventDetailStatus, EventStatusViewModel>(_eventStatus);
                Log.Information("Event Status {@_eventStatusVM} retrieved from database", _eventStatusVM);
                return new OkObjectResult(new ResultVM() { Status = Status.Success, Data = _eventStatusVM });
            }
            else
            {
                Log.Information("Could not find Event Status wit Id  {@id}", id);
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

            EventDetailStatus _eventStatus = _mapper.Map<EventStatusViewModel,EventDetailStatus>(eventStatusvm);

            EventDetailStatus _newCreatedEventStatus = _eventStatusRepository.CreateEventStatusDetail(_eventStatus);

            if (_newCreatedEventStatus == null)
            {
                Log.Information("Error Inserting Event Status {@eventStatusvm} Into database", eventStatusvm);
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occuered Could not create Event Status" + eventStatusvm.event_detail_status_name, Data = eventStatusvm });
            }

            eventStatusvm = _mapper.Map<EventDetailStatus, EventStatusViewModel>(_newCreatedEventStatus);
            Log.Information("Event Status {@eventStatusvm} Inserted to database", eventStatusvm);
            return new OkObjectResult(new ResultVM() { Status = Status.Success, Message = "Succesfully Created Event Status: " + eventStatusvm.event_detail_status_name, Data = eventStatusvm });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            EventDetailStatus _eventStatus = _eventStatusRepository.GetSingle(u => u.Id == id);
            if (_eventStatus != null)
            {
                _eventStatusRepository.Delete(_eventStatus);
                _eventStatusRepository.Commit();
                EventStatusViewModel _eventStatusVM = _mapper.Map<EventDetailStatus, EventStatusViewModel>(_eventStatus);
                Log.Information("Event Status {@_eventStatusVM} Deleted from database", _eventStatusVM);
                return new OkObjectResult(new ResultVM() { Status = Status.Success, Message = "Succesfully Deleted Event Status: " + _eventStatusVM.event_detail_status_name, Data = _eventStatusVM });
            }
            else
            {
                Log.Information("Error Occured Deleting Event Status from database");
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occured: ", Data = null });
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<EventDetailStatus> _event = _eventStatusRepository.GetEventStatusDetails();
            if (_event != null)
            {
                IEnumerable<EventStatusViewModel> _eventStatusVM = _mapper.Map<IEnumerable<EventDetailStatus>, IEnumerable<EventStatusViewModel>>(_event);
                Log.Information("Event Status {@_eventStatusVM} retrieved from database", _eventStatusVM);
                return new OkObjectResult(new ResultVM() { Data = _eventStatusVM, Status = Status.Success });
            }
            else
            {
                Log.Information("Error Occured Retrieving Event Statuss from database");
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occured: ", Data = null });
            }
        }

        [HttpPatch]
        public IActionResult Update([FromBody] EventStatusViewModel eventstatusvm)
        {
            EventDetailStatus _eventStatus = _eventStatusRepository.GetSingle(u => u.Id == eventstatusvm.Id);
            if (_eventStatus != null)
            {
                EventDetailStatus _newEventStatus= _mapper.Map<EventStatusViewModel, EventDetailStatus>(eventstatusvm);
                _eventStatusRepository.Update(_newEventStatus);
                _eventStatusRepository.Commit();
                EventStatusViewModel _eventStatusVM = _mapper.Map<EventDetailStatus, EventStatusViewModel>(_eventStatus);
                return new OkObjectResult(new ResultVM() { Data = _eventStatusVM, Status = Status.Success });
            }
            else
            {
                Log.Information("Error Occured Updating Event Status {@eventstatusvm}", eventstatusvm);
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occured: ", Data = null });
            }
        }
    }
}

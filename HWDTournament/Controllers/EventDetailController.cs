using AutoMapper;
using HWBTournament.API.ViewModels;
using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.Controllers
{
    [Produces("application/json")]
    [Route("api/EventDetail")]
    //[ProducesResponseType(201)]
    //[ProducesResponseType(200)]
    //[ProducesResponseType(400)]
    [Authorize(Policy = "Bearer")]
    public class EventDetailController : Controller
    {
        private readonly IEventDetailRepository _eventDetailRepository;
        private readonly IMapper _mapper;

        public EventDetailController(IEventDetailRepository eventDetailRepository, IMapper mapper)
        {

            _eventDetailRepository = eventDetailRepository;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            EventDetail _eventdetail = _eventDetailRepository.GetSingle(u => u.Id == id);
            if (_eventdetail != null)
            {
                EventDetailViewModel _eventDetailVM = _mapper.Map<EventDetail, EventDetailViewModel>(_eventdetail);
                Log.Information("Event Detail {@_eventDetailVM} retrieved from database", _eventDetailVM);
                return new OkObjectResult(new ResultVM() { Status = Status.Success, Data = _eventDetailVM });
            }
            else
            {
                Log.Information("Could not find Event Detail wit Id  {@id}", id);
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

            EventDetail _newevent = _mapper.Map<EventDetailViewModel,EventDetail>(eventdetailvm);
            EventDetail _newCreatedEventDetail = _eventDetailRepository.CreateEventDetail(_newevent);

            if (_newCreatedEventDetail == null)
            {
                Log.Information("Error Inserting Event Detail {@eventdetailvm} Into database", eventdetailvm);
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occuered Could not create Event Detail Detail" + eventdetailvm.event_detail_name, Data = eventdetailvm });
            }

            EventDetailViewModel _eventdetailVM = _mapper.Map<EventDetail, EventDetailViewModel>(_newCreatedEventDetail);
            Log.Information("Event Detail {@_eventdetailVM} Inserted from database", _eventdetailVM);
            return new OkObjectResult(new ResultVM() { Status = Status.Success, Message = "Succesfully Created Event Detail Detail: " + _eventdetailVM.event_detail_name, Data = eventdetailvm });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            EventDetail _eventdetail = _eventDetailRepository.GetSingle(u => u.Id == id);
            if (_eventdetail != null)
            {
                _eventDetailRepository.Delete(_eventdetail);
                _eventDetailRepository.Commit();
                EventDetailViewModel _eventdetailVM = _mapper.Map<EventDetail, EventDetailViewModel>(_eventdetail);
                Log.Information("Event Detail {@_eventdetailVM} Deleted from database", _eventdetailVM);
                return new OkObjectResult(new ResultVM() { Status = Status.Success, Message = "Succesfully Deleted Tournament: " + _eventdetailVM.event_detail_name, Data = _eventdetailVM });
            }
            else
            {
                Log.Information("Error Occured Deleting Event Detail from database");
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occured: ", Data = null });
            }
        }

        [HttpGet (Name = "EventDetail")]
        //[Route("/api/EventDetail")]
        public IActionResult Get()
        {
            IEnumerable<EventDetail> _event = _eventDetailRepository.GetEventDetails();
            if (_event != null)
            {
                IEnumerable<EventDetailViewModel> _eventdetailVM = _mapper.Map<IEnumerable<EventDetail>, IEnumerable<EventDetailViewModel>>(_event);
                Log.Information("Event Detail {@_eventdetailVM} retrieved from database", _eventdetailVM);
                return new OkObjectResult(new ResultVM() { Data = _eventdetailVM, Status = Status.Success });
            }
            else
            {
                Log.Information("Error Occured Retrieving Events from database");
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occured: ", Data = null });
            }
        }

        [HttpPatch]
        public IActionResult Update([FromBody] EventDetailViewModel eventvm)
        {
            EventDetail _eventdetail = _eventDetailRepository.GetSingle(u => u.Id == eventvm.Id);
            if (_eventdetail != null)
            {
                EventDetail _neweventdetail = _mapper.Map<EventDetailViewModel,EventDetail >(eventvm);
                _eventDetailRepository.Update(_neweventdetail);
                EventDetailViewModel _eventdetailVM = _mapper.Map<EventDetail, EventDetailViewModel>(_eventdetail);
                Log.Information("Event Detail {@_eventdetailVM} Updated to database", _eventdetailVM);
                return new OkObjectResult(new ResultVM() { Data = _eventdetailVM, Status = Status.Success });
            }
            else
            {
                Log.Information("Error Occured Updating Event Detail {@eventvm}", eventvm);
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occured: ", Data = null });
            }
        }
    }
}
